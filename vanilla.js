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


 const navSlide7 = ()=>{
      const tile7 =  document.getElementById('tile7'); 
      const nav7 = document.querySelector('.nav7');
      const close7 = document.querySelector('.close7');
      tile7.addEventListener('click', ()=>{
      nav7.classList.toggle('nav7b')
      }); 
      close7.addEventListener('click', ()=>{
      nav7.classList.remove('nav7b')
      });
  };

  navSlide7();
  
   const navSlide8 = ()=>{
      const tile8 =  document.getElementById('tile8'); 
      const nav8 = document.querySelector('.nav8');
      const close8 = document.querySelector('.close8');
      tile8.addEventListener('click', ()=>{
      nav8.classList.toggle('nav8b')
      }); 
      close8.addEventListener('click', ()=>{
      nav8.classList.remove('nav8b')
      });
  };

  navSlide8();

  const navSlide9 = ()=>{
      const tile9 =  document.getElementById('tile9'); 
      const nav9 = document.querySelector('.nav9');
      const close9 = document.querySelector('.close9');
      tile9.addEventListener('click', ()=>{
      nav9.classList.toggle('nav9b')
      }); 
      close9.addEventListener('click', ()=>{
      nav9.classList.remove('nav9b')
      });
  };

  navSlide9();

  const navSlide10 = ()=>{
      const tile10 =  document.getElementById('tile10'); 
      const nav10 = document.querySelector('.nav10');
      const close10 = document.querySelector('.close10');
      tile10.addEventListener('click', ()=>{
      nav10.classList.toggle('nav10b')
      }); 
      close10.addEventListener('click', ()=>{
      nav10.classList.remove('nav10b')
      });
  };

  navSlide10();

  const navSlide11 = ()=>{
      const tile11 =  document.getElementById('tile11'); 
      const nav11 = document.querySelector('.nav11');
      const close11 = document.querySelector('.close11');
      tile11.addEventListener('click', ()=>{
      nav11.classList.toggle('nav11b')
      }); 
      close11.addEventListener('click', ()=>{
      nav11.classList.remove('nav11b')
      });
  };

  navSlide11();

    const navSlide12 = ()=>{
      const tile12 =  document.getElementById('tile12'); 
      const nav12 = document.querySelector('.nav12');
      const close12 = document.querySelector('.close12');
      tile12.addEventListener('click', ()=>{
      nav12.classList.toggle('nav12b')
      }); 
      close12.addEventListener('click', ()=>{
      nav12.classList.remove('nav12b')
      });
  };

  navSlide12();


//menu items with multiple sheets// 


const happier= document.getElementById('happier'); 

const openMultiple = ()=>{
  happier.addEventListener('click', ()=>{
    window.open("PDFs/Marshmello Happier 1.pdf"); window.open("PDFs/Marshmello Happier 2.pdf"); 
  })
}

