import { Component } from "react";
export class Left extends Component
{
    render()
    {
        return <div>
            
<aside class="app-sidebar" id="app-sidebar">
    <div class="app-sidebar_user"><img class="app-sidebar_user-avatar"
                                       src="https://i.imgur.com/s7eimIR.png"
                                       alt="Administator"/>
        <div>
            <center><p class="app-sidebar__user-name text-white"></p>
                <p class="app-sidebar__user-designation text-white">لوحة التحكم</p></center>
        </div>
    </div>
    <ul class="app-menu">

      
        <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview">
                <i class="app-menu__icon fa fa-archive"></i><span
                        class="app-menu__label">المستخدمين</span><i
                        class="treeview-indicator fa fa-angle-right"></i></a>
            <ul class="treeview-menu">
                <li><a class="treeview-item" href="/users">
                        جدول المستخدمين</a></li>
                <li><a class="treeview-item" href="/users/create">
                        اضافة مستخدم</a></li>
            </ul>
        </li>
       

            <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview">
                    <i class="app-menu__icon fa fa-archive"></i><span
                            class="app-menu__label">المنتجات</span><i
                            class="treeview-indicator fa fa-angle-right"></i></a>
                <ul class="treeview-menu">
                    <li><a class="treeview-item" href="products">
                            المنتجات</a></li>
                    <li><a class="treeview-item" href="/admin/products_active/all/0">
                            عرض المنتجات الفعالة</a></li>
                    <li><a class="treeview-item" href="/admin/products_inactive/all/0">
                            عرض المنتجات الغير فعالة</a></li>
                    <li><a class="treeview-item" href="/products/add">إضافة منتج</a></li>
                        <li><a class="treeview-item" href="/products/show">عرض المنتجات</a></li>

                   
                </ul>
            </li>

            <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview">
                    <i class="app-menu__icon fa fa-cog"></i><span
                            class="app-menu__label">الاعدادات</span><i
                            class="treeview-indicator fa fa-angle-right"></i></a>
                <ul class="treeview-menu">
                    <li><a class="treeview-item" href="/users/passwordEdit">
                            تعديل كلمة المرور</a></li>
                    <li>
                        <a class="app-menu_item text-white" href="{{ route('logout') }}"><i
                                        class="app-menu_icon fa fa-power-off"></i><span
                                        class="app-menu__label">&nbsp&nbsp تسجيل الخروج</span></a>
                    </li>
                </ul>
            </li>




    </ul>
</aside>

        </div>
    }
}