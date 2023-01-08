import { Component } from "react";
import './Template.css';
export class Template extends Component
{
    render(){
        return <div>
<head>
    <title>لوحة التحكم</title>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
    <link rel="stylesheet" type="text/css" href="{{asset('css/main.css')}}"/>

    
    <link rel="stylesheet" type="text/css"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="icon"
            type="image/png"
            href="/themes/ar/default_theme/logo.ico/"/>

    
</head>
<body class="app sidebar-mini rtl">

<header class="app-header">
    <a class="app-header__logo" href="/admin/home"><font face="Tahoma">لوحة التحكم</font></a>
    <a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>

</header>

<div class="app-sidebar__overlay" data-toggle="sidebar"></div>


<main class="app-content">

    <div class="alert" id="alert" style="display: none">

        <center><strong style="font-size: 35px">يوجد طلب جديد في تطبيق الأخوين مول</strong></center>

        <button class="form-control btn-outline-primary "
                style="border-color: #fff;color:#fff ;cursor: pointer;margin-top: 50px"
                onclick="close_alert();">إغلاق
        </button>
    </div>
</main>

<script src="{{asset('js/jquery-3.2.1.min.js')}}"></script>
<script src="{{asset('js/popper.min.js')}}"></script>
<script src="{{asset('js/bootstrap.min.js')}}"></script>
<script src="{{asset('js/main.js')}}"></script>
<script src="{{asset('js/tinymce/tinymce.min.js')}}"></script>

<script src="{{asset('js/plugins/pace.min.js')}}"></script>

</body>


        </div>
    }
}