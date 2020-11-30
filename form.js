class Form {

    constructor() {
      
      this.button = createButton('.');
      
      
    }
    hide(){
      
      this.button.hide();
      
    }

    display()
    {
      this.buttom.x = hanger.x;
      this.button.y = hanger.y;
    }
  
    display(){
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
 
      this.button.mousePressed(()=>{
    
        constrainta = new suspender(sandy.body, { x: 300, y: 50 });
         
       
      });
  
    }
  }