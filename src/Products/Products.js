import { Component } from "react";
export class Products extends Component
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
                                <h3 style="color:#333">المنتجات</h3>
                                <section>
                                    <div class="product-list-cart">
                                        <div class="product-status-wrap border-pdt-ct">
                                            <table  class="table table-hover table-bordered" id="sampleTable" style="margin-top: 10px">
                                                <tr class="vertical-align: middle;">
                                                    <th>رقم المنتج</th>
                                                    <th>اسم المنتج</th>
                                                    <th>صورة المنتج</th>
                                                    <th>السعر</th>
                                                    <th>الوصف</th>
                                                    <th>الصنف</th>
                                                    <th>الكمية</th>
                                                    <th colspan="2"><center>العمليات على المنتجات</center></th>
                                                </tr>
                                              
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td><center><a href="{{url('products/edit',$product->id)}}" class="btn btn-outline-primary">تعديل</a></center></td>
                                                        <td><center><a href="{{url('products/delete',$product->id)}}" class="btn btn-outline-primary"> حذف</a></center></td>
                                                    </tr>
                                               
                                            </table>
                                        </div>
                                    </div>
                                </section>
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