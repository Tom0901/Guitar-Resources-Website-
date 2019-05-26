const navSlide = ()=>{
      const tile1 =  document.getElementById('tile1'); 
      const nav1 = document.querySelector('.nav1');
      const close1 =document.querySelector('.close1');
      tile1.addEventListener('click', ()=>{
      nav1.classList.toggle('nav1b')
      });
      close1.addEventListener('click',()=>{
      nav1.classList.remove('nav1b');
      }); 
  };

  navSlide();

  const navSlide2 = ()=>{
      const tile2 =  document.getElementById('tile2'); 
      const nav2 = document.querySelector('.nav2');
      const close2 =document.querySelector('.close2');
      tile2.addEventListener('click', ()=>{
      nav2.classList.toggle('nav2b')
      });
      close2.addEventListener('click', ()=>{
      nav2.classList.remove('nav2b');
      }); 
  };

  navSlide2();

  const navSlide3 = ()=>{
      const tile3 =  document.getElementById('tile3'); 
      const nav3 = document.querySelector('.nav3');
      const close3 = document.querySelector('.close3');
      tile3.addEventListener('click', ()=>{
      nav3.classList.toggle('nav3b')
      });
      close3.addEventListener('click',()=>{ 
      nav3.classList.remove('nav3b');
      }); 
  };

  navSlide3();

  const navSlide4 = ()=>{
      const tile4 =  document.getElementById('tile4'); 
      const nav4 = document.querySelector('.nav4');
      const close4 =document.querySelector('.close4');
      tile4.addEventListener('click', ()=>{
        nav4.classList.toggle('nav4b')
      });
      close4.addEventListener('click',()=>{
       nav4.classList.remove('nav4b')
       console.log("does it work?");
      });
  };

  navSlide4();

  const navSlide5 = ()=>{
      const tile5 =  document.getElementById('tile5'); 
      const nav5 = document.querySelector('.nav5');
      const close5 = document.querySelector('.close5');
      tile5.addEventListener('click', ()=>{
      nav5.classList.toggle('nav5b')
      }); 
      close5.addEventListener('click', ()=>{
      nav5.classList.remove('nav5b')
      });
  };

  navSlide5();

  const navSlide6 = ()=>{
      const tile6 =  document.getElementById('tile6'); 
      const nav6 = document.querySelector('.nav6');
      const close6 = document.querySelector('.close6');
      tile6.addEventListener('click', ()=>{
      nav6.classList.toggle('nav6b')
      }); 
      close6.addEventListener('click', ()=>{
      nav6.classList.remove('nav6b')
      });
  };

  navSlide6();


