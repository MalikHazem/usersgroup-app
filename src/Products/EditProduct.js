import { Component } from "react";
export class EditProduct extends Component
{
    render(){
        return <div>

    <div class="col-md-12">
        <div class="tile">
            <div class="tile-body">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin-top: 10px">
                        <div class="product-cart-inner">
                            <div id="example-basic">
                                <h3>اضافة منتج</h3>
                                <form method="post" action="{{url('/products/update',$product->id)}}" enctype="multipart/form-data">
                                    
                                    <p>اسم المنتج:</p>
                                    <input class="form-control" value="{{$product->name}}" name="name" type=" " id="name"/>
                                    <p>صورة المنتج:</p>
                                    <input class="form-control" value="{{$product->img}}" type="file" name="img" id="img"/>
                                    <p>سعر المنتج:</p>
                                    <input class="form-control" value="{{$product->price}}" name="price" type="" id="price"/>
                                    <p>وصف للمنتج:</p>
                                    <input class="form-control" value="{{$product->description}}"  name="description" type=" " id="description"/>
                                    <p>صنف المنتج:</p>
                                    <input class="form-control" value="{{$product->categories}}" name="categories" type=" " id="categories"/>
                                    <p>الكمية:</p>
                                    <input class="form-control"value="{{$product->quantity}}" name="quantity" type="" id="quantity"/><br/>
                                    <input class="btn btn-outline-dark" name="submit" type="submit" value="حفظ"/>
                                </form>

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