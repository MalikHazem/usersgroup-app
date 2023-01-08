import { Component } from "react";
export class Card extends Component
{
    render(){
        return <div>
            <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
</head>

    <div class="col-md-12">
        <div class="tile">
            <div class="tile-body">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin-top: 10px">
                        <div class="product-cart-inner">
                            <div id="example-basic">
                                
                                         <div class="card-body">
                                             <p class="card-text"></p>
                                         </div>
                                     </div>
                                
                             
                                <div class="container">
                                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                        
                                            <div class="col" style="margin: 10px">
                                                <div class="card" style="width: 15rem; width: 13rem;">
                                                    <a href="{{url('/products/show_product',$product->id)}}"><img src="https://usersgroup.tk/images/{{$product->img}}"width="100%" height="90px"/></a>
                                                    <div class="card-body">
                                                        <p id="description" class="card-text"></p>
                                                       
                                                            <p id="description" class="card-text"></p>
                                                        
                                                            <p id="description" class="card-text"></p>
                                                        
                                                        <form method="Post" action="{{route('cart.store')}}">
                                                            
                                                            <input type="hidden" name="product_id" value="{{ $product->id }}"/>
                                                            
                                                            <button type="submit" class="btn btn-outline-dark">اضافة الى سلة</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                       
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    }
}