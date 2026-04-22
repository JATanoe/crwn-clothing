import React, { useState } from "react"

import "./sign-in-form.styles.scss"

import {
   createAuthUserWithEmailAndPassword,
   createUserDocumentFromAuth,
   signInWithGooglePopup,
   signInUserWithEmailAndPassword,
} from "../../utils/firebase.utils"
import FormInput from "../../components/form-input/form-input.component"
import Button from "../../components/button/button.component"

const defualtFormFields = {
   email: "",
   password: "",
}

const SignInForm = () => {
   const [formFields, setFormFields] = useState(defualtFormFields)
   const { email, password } = formFields

   console.log(formFields)

   const resetFormFields = () => {
      setFormFields(defualtFormFields)
   }

   const signInWithGoogle = async () => {
      const { user } = await signInWithGooglePopup()
      await createUserDocumentFromAuth(user)
   }

   const handleSubmit = async (event) => {
      event.preventDefault()

      try {
         const response = await signInUserWithEmailAndPassword(email, password)
         console.log(response)
         resetFormFields()
      } catch (error) {
         switch (error.code) {
            case "auth/wrong-password":
               alert("Incorrect password for email")
               break
            case "auth/user-not-found":
               alert("No user associated with this email")
               break
            default:
               console.log("User sign in encountered an error", error)
         }
      }
   }

   const handleChange = (event) => {
      const { name, value } = event.target

      setFormFields({ ...formFields, [name]: value })
   }

   return (
      <div className="sign-in-container">
         <h2>Already have an account?</h2>
         <span>Sign in with your email and password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               label="Email"
               type="email"
               required
               onChange={handleChange}
               name="email"
               value={email}
            />

            <FormInput
               label="Password"
               type="password"
               required
               onChange={handleChange}
               name="password"
               value={password}
            />

            <div className="buttons-container">
               <Button type="submit">Sign In</Button>
               <Button
                  buttonType="google"
                  type="button"
                  onClick={signInWithGoogle}
               >
                  Sign In With Google
               </Button>
            </div>
         </form>
      </div>
   )
}

export default SignInForm
