import { Component } from "react";
export class Password extends Component
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


                                <h3>تعديل كلمة المرور</h3>
                                <form method="post" action="">
                                    
                                    <p> كلمة المرور الحالية:</p>
                                    <input class="form-control" id="old_password" name="old_password" type="password"/>
                                    <p style="color: red" id="l_old_password" name="l_old_password"></p>

                                    <p> كلمة المرور الجديدة:</p>
                                    <input class="form-control" id="password" name="password" type="password"/>
                                    <p style="color: red" id="new_password" name="new_password"></p>

                                    <p>تاكيد كلمة المرور:</p>
                                    <input class="form-control" id="confirm_password" name="confirm_password" type="password"/>
                                    <p style="color: red" id="l_confirm_password" name="l_confirm_password"></p>

                                    <input class="btn btn-outline-dark" type="submit" value="حفظ"/>
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