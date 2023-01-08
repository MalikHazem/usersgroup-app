import {Component} from "react";
export class Edit extends Component
{
    constructor(){
        super()
    
        this.state = {
            data: {},
            id: 0
        }

        this.getdata();
    }

    getdata(){
        console.log(window.location.search);
            let parameters = qs.parse(window.location.search);
            this.setState({id: parameters.id});
        axios.get("https://usersgroup.tk/users/edit/" + parameters.id).then(d => {
            this.setState({data: d.data})
            document.getElementById('name').value = d.data.name,
            document.getElementById('email').value = d.data.email ,
            document.getElementById('password').value = d.data.password,
            document.getElementById('permission_id').value= d.data.permission_id
        })
    }

    send = ()=>{
        let parameters = qs.parse(window.location.search);
        axios.post("https://usersgroup.tk/users/update/",{id: parameters.id ,name: document.getElementById('name').value ,
        email:document.getElementById('email').value ,
        password:document.getElementById('password').value ,
        permission_id: document.getElementById('permission_id').value}).then(d=> {
            window.location = "data"; 
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
                                <h3>تعديل المستخدم</h3>
                                    
                                    <p>الاسم:</p>
                                    <input class="form-control" name="name" value="{{$users->name}}"/>
                                    <p style="color: red" id="name" name="name"></p>
                                    <p>الايميل:</p>
                                    <input class="form-control" name="email" value="{{$users->email}}" type="email"/>
                                    <p style="color: red" id="email" name="email"></p>
                                    <p> كلمة المرور الجديدة:</p>
                                    <input class="form-control" id="password" name="password" type="password"/>
                                    <div class="mb-3">
                                    <p>صلاحية:</p>
                                    <select class="form-select form-select-lg mb-3" name="permission_id" id="permission_id">
                                    {
                                        this.state.permission.map(item => {
                                        return <option value={item.id}>{item.name}</option>
                                        })
                                    }
                                    </select ><br/>
                                    </div>
                                    <button class="btn btn-outline-dark" onClick={this.send} name="submit" type="submit" value="تعديل">تعديل</button>
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