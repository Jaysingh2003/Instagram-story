var arr=[
    {dp:"https://images.unsplash.com/photo-1711470053377-bdd52fdba484?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1618151313441-bc79b11e5090?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
var clutter=" "
var growth=0
arr.forEach(function(val,index){
    clutter +=` <div class="story">
    <img id="${index}" src="${val.dp}" alt="">
</div>`
})
document.querySelector("#storyian").innerHTML=clutter

document.querySelector("#storyian").addEventListener("click",function(dps){
   // console.log(dps.target)
   document.querySelector("#full-scr").style.display="block"
   document.querySelector("#full-scr").style.backgroundImage=`url(${arr[dps.target.id].img})`

   setTimeout(function(){
    document.querySelector("#full-scr").style.display="none"
   },3000)

   if(growth<100){
    setInterval(function(){
    document.querySelector("#growth").style.width=`${growth++}%`
  
    },30)
   }else{
    growth=0
   }

})


