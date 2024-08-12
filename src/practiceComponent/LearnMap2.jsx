import React from 'react'
import { products } from '../product'

const LearnMap2 = () => {

    /* let task1 = ()=>{
        let list1 = products.map((value, i)=>{
            return (<div key={i}>{value.title}</div>)
        })
    return list1
    } */

   /*  let task2 =()=>{
        let list2 = products.map((value,i)=>{
            return (<div key={i}>
                {value.title} costs NRs. {value.price} and its categories is {value.category}.
            </div>)
        })
        return list2;
    } */

    /* let task3=()=>{
        let list3= products.filter((item,i)=>{
            if(item.price > 2000){
                return true;
            }
        }).map((item, i) =>{
            return (<div key={i}>{item.title} costs NRS. {item.price} and its category is {item.category}</div>)
        })
        return list3
    } */

   /*  let task4 = () =>{
        let list4 = products.filter((value, i) =>{
            if (value.category === "Books"){
                return true
            }
        }).map((value, i) =>{
            return (<div key={i}>{value.title} costs NRS.{value.price} and its category is {value.category}</div>)
        })
        return list4
    } */

    /* let task5 = () =>{
        let list5 = products.reduce((pre, cur)=>{
            return pre + cur.price
        }, 0)
        return (<div>The total price of all product is NRs.{list5}</div>)
    } */

    /* let task6 = ()=>{
    let list6= products.map((value, i)=>{
        return (<div key={i}>{value.title} costs NRs.{value.price}</div>)
    })
    return list6} */

    let task7 = ()=>{
        let list7 = products.map((value, i)=>{
            return <div>{value.category}</div>
        })
        let uniqueProduct = [...new Set(list7)]
        return uniqueProduct
        
    }

    let task8 = () => {
    // Assuming 'products' is your array of products
    let uniqueCategories = [...new Set(products.map(value => value.category))];
    
    // Returning the array of unique categories
    return uniqueCategories;
};


    /* Show me the product according to Category
Laptops
MacBook Pro
Dell XPS
Books
Python
Javascript */
   
  return (
    <div>
        {/* <h1>The Products in our shop are:-</h1>
        {task1()} */}


        {/* <h1>The product in our shop are</h1>    
        {task2()} */}

        {/* <h1>The product in our shop.</h1>
        {task3()} */}

        {/* <h1>The product in our shop</h1>
        {task4()} */}

        {/* {task5()} */}

        {/* {task6()}
        {task5()} */}
        
        {task7()}
        {task8()}
        {[...new Set(['a', 'b', 'a', 'c'])]}

    </div>
  )
}

export default LearnMap2