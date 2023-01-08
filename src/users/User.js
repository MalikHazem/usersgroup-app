import { Component } from "react";
import { ShowUser } from "./ShowUser";
export class User extends Component
{
    constructor(){
        super()
        this.state = {
            data : []
        }
        this.getData()
    }

    getData = ()=>{
        axios.get('https://usersgroup.tk/users').then(d => {
            this.setState({data : d.data})
        })
    }

    delete = (id)=>{
        console.log("delete")

        axios.post("https://usersgroup.tk/users/delete/",{id:  id }).then(d=>{
            console.log(d.data)
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
                                <h3 style="color:#333">المستخدمين</h3>
                                <section>
                                    <div class="product-list-cart">
                                        <div class="product-status-wrap border-pdt-ct">
                                            <table  class="table table-hover table-bordered" id="sampleTable" style="margin-top: 10px">
                                                <tr class="vertical-align: middle;">

                                                    <th>رقم المستخدم</th>
                                                    <th>اسم المستخدم</th>
                                                    <th>الايميل</th>
                                                    <th>الصلاحيات</th>
                                                    <th colspan="2"><center>العمليات على المستخدمين</center></th>

                                                </tr>
                                                
                                                {
                                                    this.state.data.map(i => {
                                                        return <ShowUser id={i.id} name={i.name} email={i.email} permission={i.permission_id} action={this.delete}/>
                                                    })
                                                }
                                                
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