import React, { component } from "react";
export class Create extends component
{
    constructor(){
        super()
        this.state = {
            data : []
        }
    }

    save = ()=>{
        axios.post("https://usersgroup.tk/products/store",{ name: document.getElementById('name').value ,
        email:document.getElementById('email').value ,
        password:document.getElementById('password').value ,
        permission_id: document.getElementById('permission_id').value}).then(d => {
            this.getData()
        })
    }

    render(){
        return <div>
            
    <div class="col-md-12">
        <div class="tile">
            <div class="tile-body">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin-top: 10px">
                        <div class="product-cart-inner">
                            <div id="example-basic">
                                <h3>اضافة المستخدم</h3>
                                    <p>الاسم:</p>
                                    <input class="form-control" name="name"/>
                                    <p style="color: red" id="name" name="name"></p>
                                    <p>الايميل:</p>
                                    <input class="form-control" name="email" type="email"/>
                                    <p style="color: red" id="email" name="email"></p>
                                    <p>كلمة المرور:</p>
                                    <input class="form-control/" name="password" type="password"/>
                                    <p style="color: #ff0000" id="password" name="password"></p>
                                    <div class="mb-3">
                                    <p>صلاحية:</p>
                                    <select class="form-select form-select-lg mb-3"  name="permission_id" id="permission_id">
                                        <option value="{{$permission->id}}"></option>
                                    </select ><br/>
                                    </div>
                                    <button class="btn btn-outline-dark" onClick={this.save} value="حفظ">حفظ</button>


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