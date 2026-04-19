import React from "react"

import Directory from "../../components/categories/categories.component"

const Home = () => {
   const categories = [
      {
         id: 1,
         title: "Hats",
         imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
         description:
            "Discover our latest collection of stylish hats for every occasion.",
         link: "#",
      },
      {
         id: 2,
         title: "Jackets",
         imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
         description:
            "Explore our range of jackets designed to keep you warm and fashionable.",
         link: "#",
      },
      {
         id: 3,
         title: "Sneakers",
         imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
         description:
            "Step up your shoe game with our trendy sneakers for all styles.",
         link: "#",
      },
      {
         id: 4,
         title: "Womens",
         imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
         description:
            "Find the latest trends in women's fashion with our diverse collection.",
         link: "#",
      },
      {
         id: 5,
         title: "Mens",
         imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
         description:
            "Discover our stylish collection of men's clothing for every occasion.",
         link: "#",
      },
   ]

   return <Directory categories={categories} />
}

export default Home
