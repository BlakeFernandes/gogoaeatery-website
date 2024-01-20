import Image, { StaticImageData } from "next/image"
import React from "react"

import { TextSection } from "./ui/section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faWheatAlt } from '@fortawesome/free-solid-svg-icons'
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const MenuCard = (props: { image: StaticImageData, text: string, href: string }) => {
    return (
        <section>
            <div className="mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto text-center" data-aos-id-tabs="">
                    <a href={props.href} target="_blank" >
                        <div className="relative h-96 w-72 overflow-hidden p-4 border-2 border-gray-300">
                            <Image
                                src={props.image}
                                alt="Background"
                                layout="fill"
                                objectFit="cover"
                                className="z-0 transition-transform duration-700 delay-75 hover:scale-105"
                            />

                            <div className="absolute inset-0 m-2 border-2 border-white z-10 pointer-events-none"></div>

                            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                <p className="text-white font-bold text-xl text-center m-2 text-wrap">{props.text}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export const Menu = () => {
    return (
        <>
            <TextSection
                title="Our Menu"
                subtitle="Best Goan & Continental Cuisine in Devonport"
                description={[
                    "Our menu elegantly showcases authentic Goan dishes, each meticulously refined through generations, embodying the rich culinary heritage of Goa. Complementing these are select European dishes, adding a sophisticated touch of rustic charm to our diverse culinary array."
                ]}
                footer={
                    <>
                        {/* <div className="grid md:grid-cols-3 mx-auto max-w-4xl justify-center items-center sm:gap-x-2">
                            <MenuCard image={FoodMenuImg} text="FOOD MENU" href="/menu/food-menu.pdf" />
                            <MenuCard image={DrinksMenuImg} text="DRINKS MENU" href="/menu/drinks-menu.pdf" />
                            <MenuCard image={CateringMenuImg} text="CATERING MENU" href="/menu/catering-menu.pdf" />
                        </div> */}
                    </>
                }
            />
            <div className="mx-auto max-w-screen-2xl py-8 md:py-12">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-between bg-stone-50 p-12 mb-6">
                    {menuItems.map((menuItem) => (
                        <>
                            <div className="w-full">
                                <p className="text-4xl font-medium tracking-widest pb-10">{menuItem.title}</p>
                                {menuItem.items.map((item) => (
                                    <div key={item.name} className="pb-6">
                                        <div className="flex justify-between pb-2">
                                            <div className="flex items-center space-x-2">
                                                <p className="font-medium">{item.name}</p>
                                                {item.vegetarian ? <FontAwesomeIcon icon={faLeaf} /> : <></>}
                                                {item.glutenFree ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" className="flex h-4" viewBox="0 0 24 24">
                                                        <path d="m23.707,23.707c-.195.195-.451.293-.707.293s-.512-.098-.707-.293L.293,1.707C-.098,1.316-.098.684.293.293S1.316-.098,1.707.293l6.046,6.046c.197-.226.472-.339.747-.339.277,0,.555.115.752.345.576.673,1.321,1.863,1.618,3.11l1.131,1.131,1.262-1.262c-1.363-.996-2.262-2.407-2.262-3.824,0-1.591,1.012-3.295,1.748-4.155.197-.23.474-.345.752-.345s.555.115.752.345c.736.86,1.748,2.564,1.748,4.155,0,.46-.104.918-.277,1.363l1.285-1.285c-.041-1.184.068-2.872.902-3.706C19.04.742,21.314.231,22.778.012c.707-.106,1.311.498,1.205,1.205-.219,1.464-.729,3.738-1.86,4.868-.841.841-2.519.949-3.7.906l-1.286,1.286c.445-.174.903-.277,1.363-.277,1.591,0,3.295,1.012,4.155,1.748.23.197.345.474.345.752s-.115.555-.345.752c-.86.736-2.564,1.748-4.155,1.748-1.417,0-2.829-.899-3.824-2.262l-1.262,1.262,1.131,1.131c1.248.297,2.438,1.042,3.11,1.618.23.197.345.474.345.752,0,.275-.113.55-.339.747l6.046,6.046c.391.391.391,1.023,0,1.414ZM6,10.5c0,1.417.899,2.829,2.262,3.824l-2.539,2.539c.174-.445.277-.903.277-1.363,0-1.591-1.012-3.295-1.748-4.155-.197-.23-.474-.345-.752-.345s-.555.115-.752.345c-.736.86-1.748,2.564-1.748,4.155,0,1.417.899,2.829,2.262,3.824l-2.969,2.969c-.391.391-.391,1.023,0,1.414.195.195.451.293.707.293s.512-.098.707-.293l2.969-2.969c.996,1.363,2.407,2.262,3.824,2.262,1.591,0,3.295-1.012,4.155-1.748.23-.197.345-.474.345-.752s-.115-.555-.345-.752c-.86-.736-2.564-1.748-4.155-1.748-.46,0-.918.104-1.363.277l2.539-2.539c.996,1.363,2.407,2.262,3.824,2.262.081,0,.163-.003.244-.008l-7.736-7.736c-.005.082-.008.163-.008.244Z" />
                                                    </svg>
                                                )  : <></>}
                                            </div>
                                            <p className="text-[#888888] font-medium">{item.price}</p>
                                        </div>
                                        <p className="text-[#888888] text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    ))}
                    <div className="border-2 border-black p-4">
                        <p className="flex items-center"><FontAwesomeIcon className="pr-2" icon={faLeaf} /> Vegetarian</p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" className="flex h-4 pr-2" viewBox="0 0 24 24">
                                <path d="m23.707,23.707c-.195.195-.451.293-.707.293s-.512-.098-.707-.293L.293,1.707C-.098,1.316-.098.684.293.293S1.316-.098,1.707.293l6.046,6.046c.197-.226.472-.339.747-.339.277,0,.555.115.752.345.576.673,1.321,1.863,1.618,3.11l1.131,1.131,1.262-1.262c-1.363-.996-2.262-2.407-2.262-3.824,0-1.591,1.012-3.295,1.748-4.155.197-.23.474-.345.752-.345s.555.115.752.345c.736.86,1.748,2.564,1.748,4.155,0,.46-.104.918-.277,1.363l1.285-1.285c-.041-1.184.068-2.872.902-3.706C19.04.742,21.314.231,22.778.012c.707-.106,1.311.498,1.205,1.205-.219,1.464-.729,3.738-1.86,4.868-.841.841-2.519.949-3.7.906l-1.286,1.286c.445-.174.903-.277,1.363-.277,1.591,0,3.295,1.012,4.155,1.748.23.197.345.474.345.752s-.115.555-.345.752c-.86.736-2.564,1.748-4.155,1.748-1.417,0-2.829-.899-3.824-2.262l-1.262,1.262,1.131,1.131c1.248.297,2.438,1.042,3.11,1.618.23.197.345.474.345.752,0,.275-.113.55-.339.747l6.046,6.046c.391.391.391,1.023,0,1.414ZM6,10.5c0,1.417.899,2.829,2.262,3.824l-2.539,2.539c.174-.445.277-.903.277-1.363,0-1.591-1.012-3.295-1.748-4.155-.197-.23-.474-.345-.752-.345s-.555.115-.752.345c-.736.86-1.748,2.564-1.748,4.155,0,1.417.899,2.829,2.262,3.824l-2.969,2.969c-.391.391-.391,1.023,0,1.414.195.195.451.293.707.293s.512-.098.707-.293l2.969-2.969c.996,1.363,2.407,2.262,3.824,2.262,1.591,0,3.295-1.012,4.155-1.748.23-.197.345-.474.345-.752s-.115-.555-.345-.752c-.86-.736-2.564-1.748-4.155-1.748-.46,0-.918.104-1.363.277l2.539-2.539c.996,1.363,2.407,2.262,3.824,2.262.081,0,.163-.003.244-.008l-7.736-7.736c-.005.082-.008.163-.008.244Z" />
                            </svg>
                            Gluten Free
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center space-x-4">
                    <Link className={buttonVariants({ size: "sm" })} href="https://gogoaeatery.co.nz/menu/catering-menu.pdf" target="_blank">CATERING MENU</Link>
                    <Link className={buttonVariants({ size: "sm" })} href="https://gogoaeatery.co.nz/menu/drinks-menu.pdf" target="_blank">DRINKS MENU</Link>
                </div>
            </div>
        </>
    )
}

type menuItem = {
    title: string
    items: {
        name: string,
        description: string,
        price: number
        vegetarian?: boolean
        glutenFree?: boolean
        dairyFree?: boolean
    }[]
}

const menuItems: menuItem[] = [{
    title: "BREAKFAST",
    items: [{
        name: "Big Breakfast",
        description: "Your choice of free-range poached, fried, or scrambled egg. Complemented with crispy bacon, grilled sausage, pan-fried tomato, crisp hash brown and sourdough bread.",
        price: 22
    }, {
        name: "Egg Benedict",
        description: "Poached eggs on top with spinach and crispy hash brown drizzled with our house hollandaise sauce, on a toasted English Muffin, crispy bacon or sautéed mushroom garnished with kumara flakes, or fresh salmon. salmon +2",
        price: 21
    }, {
        name: "Triple Eggs Omlette",
        description: "Your choice of 3 fillings: glazed ham, sautéed mushrooms, cheddar cheese, onion, pan-fried tomato, or sautéed spinach. Accompanied by our house-made salsa and sourdough bread.  ",
        price: 21
    },
    {
        name: "Eggs on Toast",
        description: "Any style free-range eggs with sourdough bread",
        price: 12,
        vegetarian: true,
    }, {
        name: "Creamy Mushroom",
        description: "Portobello and button mushroom sautéed with garlic, oregano and rosemary on top of sourdough bread and finely shaved Parmesan. bacon +4",
        price: 19,
        vegetarian: true,
        glutenFree: true,
    }]
}, {
    title: "LUNCH",
    items: [{
        name: "Chicken Burger",
        description: "Bacon-stuffed chicken burger, topped with melted cheddar, caramelized onions, fresh veggies, nestled in an artisan bun, complemented by our house-made mayo and golden fries.",
        price: 22
    }, {
        name: "Beef Burger",
        description: "Sizzling angus patty, crisp smoked bacon, cheddar, fresh lettuce, ripened tomatoes, deeply caramelized onions, complemented by our house-made mayo and golden fries.",
        price: 22
    }, {
        name: "Fish and Chips",
        description: "Your choice of beer-battered or pan-fried fish. Served with a refreshing side salad or our crispy, golden fries.",
        price: 24
    }, {
        name: "Mince on Toast",
        description: "Tender minced beef, simmered with caramelized onions, sweet peas, and tomato sauce. Complemented with sourdough bread",
        price: 21
    }]
}, {
    title: "SPECIALITY",
    items: [{
        name: "Goan Chicken Caldine",
        description: "Tender pieces of chicken marinated in a blend of green coriander, aromatic spices and creamy coconut milk. Served with basmati rice.",
        price: 17,
        glutenFree: true,
    }, {
        name: "Pork Belly Sorpotel",
        description: "Succulent pieces of pork belly, slow-cooked to perfection in a blend of aromatic spices. Served with basmati rice.",
        price: 21,
        glutenFree: true,
    }, {
        name: "Tandoori Chicken Salad",
        description: "Succulent chicken, tenderized in a creamy yoghurt marinade and fragrant spices. Served with fresh mesclun greens, caramelized onions and grilled tomatos.",
        price: 21,
        glutenFree: true,
    }, {
        name: "Channa Masala & Rice",
        description: "Tender chickpeas cooked with cauliflower, onions, tomatos, garlic and ginger. Simmered to perfection with our homemade spice blend. Served with basmati rice.",
        price: 17,
        glutenFree: true,
        vegetarian: true
    }, {
        name: "Goan Prawn Curry",
        description: "Prawns cooked in mild coconut goan spices and apples. served with long grain rice.",
        price: 22,
        glutenFree: true,
    }, {
        name: "Goan Pork Vindaloo",
        description: "Tender pork marinated in garlic, ginger and Goan spices. Slow-cooked to perfection. Served with basmati rice.",
        price: 20,
        glutenFree: true,
    }, {
        name: "Lamb Xacutti Curry",
        description: "Tender lamb, slowly simmered in our unique blend of 14 aromatic spices including white poppy seeds and roasted onions. Served with basmati rice and paratha bread.",
        price: 23,
        glutenFree: true,
    }, {
        name: "Grandma's Style Beef Curry",
        description: "Beef cooked in a homemade blend paste of green coriander and spices. served with long grain rice.",
        price: 19,
        glutenFree: true,
    }]
}]


export default MenuCard