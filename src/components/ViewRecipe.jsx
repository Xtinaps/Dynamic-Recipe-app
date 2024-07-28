import React, { useState } from 'react'
import RecipeNav from './RecipeNav'

const ViewRecipe = () => {

    const [data,changeData]=useState( 
        [
           {"RecipeTitle":"Fried Rice","imglink":"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"},
           {"RecipeTitle":"Fried Rice","imglink":"https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg"},
           {"RecipeTitle":"Fried Rice","imglink":"https://www.tasteofhome.com/wp-content/uploads/2018/01/Beef-with-Ramen-Noodles_EXPS_FT21_22747_F_1116_1.jpg"},
           {"RecipeTitle":"Fried Rice","imglink":"https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=556,505"},
           {"RecipeTitle":"Fried Rice","imglink":"https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg"},
           {"RecipeTitle":"Fried Rice","imglink":"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn_fried_rice-2481925.jpg?quality=90&resize=440,400"},
           {"RecipeTitle":"Fried Rice","imglink":"https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-lasagna-soup-64529c039668f.jpg?crop=1.00xw:0.834xh;0,0.0965xh&resize=980:*"},
           {"RecipeTitle":"Fried Rice","imglink":"https://hips.hearstapps.com/hmg-prod/images/comfort-food-recipes-chicken-pasta-salad-646670ff9c384.jpeg?crop=0.8xw:1xh;center,top&resize=980:*"},
           {"RecipeTitle":"Fried Rice","imglink":"https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg"},
           {"RecipeTitle":"Fried Rice","imglink":"https://www.tasteofhome.com/wp-content/uploads/2018/01/Beef-with-Ramen-Noodles_EXPS_FT21_22747_F_1116_1.jpg"},
           {"RecipeTitle":"Fried Rice","imglink":"https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=556,505"},
           {"RecipeTitle":"Fried Rice","imglink":"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn_fried_rice-2481925.jpg?quality=90&resize=440,400"},
           {"RecipeTitle":"Fried Rice","imglink":"https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-lasagna-soup-64529c039668f.jpg?crop=1.00xw:0.834xh;0,0.0965xh&resize=980:*"},
           {"RecipeTitle":"Fried Rice","imglink":"https://hips.hearstapps.com/hmg-prod/images/comfort-food-recipes-chicken-pasta-salad-646670ff9c384.jpeg?crop=0.8xw:1xh;center,top&resize=980:*"},
           {"RecipeTitle":"Fried Rice","imglink":"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"},
        ]
)


    return (
        <div>
            <RecipeNav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                           <br/>
                           


                            {data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                    <div class="card">
                                        <img height= "300" src={value.imglink} alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Starters</h5>
                                            <p class="card-text">{value.RecipeTitle}</p>
                                            <a href="#" class="btn btn-primary">Check Recipe</a>
                                        </div>
                                    </div>
                                </div>
                                
                                }
                            )}
                        


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewRecipe