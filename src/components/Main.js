import React from "react";
import img from "../assets/images/jameefna.jpeg"




class Main extends React.Component{
    constructor(props){
        super(props);
        this.contentSections=[
            {img : img,h4 : "best places",p :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eos.",button : "learn more"},
            {img : img,h4 : "best places",p :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eos.",button : "learn more"},
            {img : img,h4 : "best places",p :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eos.",button : "learn more"},
        ]
    }

    render(){
        const auth=sessionStorage.getItem("auth");
        return(
            <main class="container">
    <div class="info-about-web row justify-content-center gap-3">
    {this.contentSections.map((element,index)=>(
        <section class="col-12 col-md-3 info-card">
            <img src={element.img} alt="" />
            <h4>{element.h4}</h4>
            <p>{element.p}</p>
            <button>{element.button}</button>
        </section>
    ))}
    </div>
    <div class="blogs">
      <div class="row ">
<div class="col-12 title">
  {auth==="true" && <h2>best places</h2>}
</div>
        {/* @foreach ($blogs as $blog)
        <div class="col-12 col-md-6 blog">
            <img src="data:image/png;base64,{{utf8_encode($blog->img) }}" alt="dd">
            <h3>{{ $blog->title }}</h3>
            <p> {{ $blog->content }}
              <a href="">learn more</a>
            </p>
            @auth
            <a href="{{ route('UpdateBlogs')}}?id={{ $blog->id }}&title={{ $blog->title  }}&content={{  $blog->content }}" class="btn btn-info">Update</a>
            @endauth
          </div>
        @endforeach */}
      </div>
    </div>
  </main>
        )
    }
}


export default Main;