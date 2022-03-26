import styled from 'styled-components';
export const Wrapper=styled.div`
margin-top:20px;

img{
    max-width:100%;
}
.card{
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    border-radius:10px;
    width:280px;
    margin:20px; 
}
.delete{
    color:green;
}
.header-card img{
    object-fit: cover;
    height:100%;
    width:100%;
}
.wrappe-content{
    display:flex;
    justify-content:space-between;
    height:40px;
    margin:10px;
}
.switchDelete{
    display:flex;
    
}
.contente-card{
    margin-top:-30px;
}
h3{
    font-weight:bold;
}
.contente-card p{
    font-size:12px;
}
.wrap{
    display:flex;
    justify-content:space-between;
    font-size:10px;
    margin:10px;
    height:60px;
}

`
;