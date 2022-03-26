import styled from 'styled-components';

export const Wrapper=styled.div`
    margin-top:40px;
img{
    max-width:100%;
}
.card{
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    border-radius:10px;
    width:300px;
    overflow:hidden;
    margin:20px;
    
}
.delete{
    color:green;
}
   
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
.contente-card{
    background:white;
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


`;
