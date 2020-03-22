//Parabol_mov Constructor
class Parabol_mov {
    constructor (vel_ini, angle_ini) {
        this.vel_ini = vel_ini;
        this.angle_ini = angle_ini;
    }
}

// Uinterface class
class Uinterface {

    //Methods
    create_canvas() {
        const canva = document.getElementById('drawbox');
        const element = document.createElement('div');
        element.innerHTML = 
        `
        <canvas 
          id="myCanvas" width="505" height="300", style="border: 1px solid black">
        </canvas>
        `;
        canva.appendChild(element);
    }

    create_parabolForm() {
        const form = document.getElementById('parabol-form');
        const element = document.createElement('div');
        element.innerHTML = 
        `
        <input type="number" id="velocity" step="0.01" placeholder="velocidad incial">
        <input type="number" id="angle" min="0" max="360" step="0.01" 
        placeholder="ángulo inicial">
        <button id="start">Go</button>
        `;
        form.appendChild(element);
    }

    draw_sin(){
        var myCanvas = document.getElementById('myCanvas');
        if(myCanvas.getContext)
        { 
            var ctx = myCanvas.getContext('2d');
                for (var i = 0; i < 8; i+=0.009) {
                    var rad = i*Math.PI; 
                    var f_sin = Math.sin(rad);
                    var x = rad*20;
                    var y = f_sin*(-20);
                    ctx.arc(x,y+150,0.1,0,2);
                    ctx.stroke();
                }     
        }
        else
        {
            alert('Tu navegador no soporta algunos elementos de la página');
        }
        
    }

    draw_cos(){
        var myCanvas = document.getElementById('myCanvas');
        if(myCanvas.getContext)
        { 
            var ctx = myCanvas.getContext('2d');
                for (var i = 0; i < 8; i+=0.009) {
                    var rad = i*Math.PI; 
                    var f_cos = Math.cos(rad);
                    var x = rad*20;
                    var y = f_cos*(-20);
                    ctx.arc(x,y+150,0.1,0,2);
                    ctx.stroke();
                }     
        }
        else
        {
            alert('Tu navegador no soporta algunos elementos de la página');
        }
    }

    draw_parabol(Parabol_mov) {
        var myCanvas = document.getElementById('myCanvas');
        if(myCanvas.getContext)
        { 
            var ctx = myCanvas.getContext('2d');
            const vel0 = Parabol_mov.vel_ini;
            const angle0 = (Parabol_mov.angle_ini*Math.PI)/180;
            const time = Math.sqrt((2*vel0*Math.sin(2*angle0))/10);
            var y = ((vel0*Math.sin(angle0)*time)-(5*time*time));
            console.log(time,y);
                for (var i = 0; i <= time; i+=0.01) {
                    var x = (6)*(vel0*Math.cos(angle0)*i);
                    var y = (-6)*((vel0*Math.sin(angle0)*i)-(5*i*i));
                    ctx.arc(x,y+300,0.1,0,2);
                    ctx.stroke();
                    console.log(x,y,i);
                }    
        }
        else
        {
            alert('Tu navegador no soporta algunos elementos de la página');
        }
    }
    
    clean_canvas() {
        var clean_btn = document.getElementById('myCanvas');
        clean_btn.parentNode.removeChild(clean_btn);
        }
}

//DOM events

//Event button sin
document.getElementById('fsin').addEventListener('click', 
        function(e) {
            // create the object uiSin of class Uinterface
            const UIsin = new Uinterface();
            
            //Call method create_canvas
            UIsin.create_canvas();

            //Call method draw_sin
            UIsin.draw_sin();

            //Prevents the page from refreshing
            e.preventDefault();
        }
)

//Event button cos
document.getElementById('fcos').addEventListener('click', 
        function(e) {
            // create the object uiSin of class Uinterface
            const UIcos = new Uinterface();
            
            //Call method create_canvas
            UIcos.create_canvas();

            //Call method draw_sin
            UIcos.draw_cos();

            //Prevents the page from refreshing
            e.preventDefault();
        }
)

//Event button Parabol_mov
document.getElementById('parabol-mov').addEventListener('click', 
        function(e) {
            
            // create the object uiSin of class Uinterface
            const UIparabol = new Uinterface();
            
            //Call method create_parabolForm
            UIparabol.create_parabolForm();          

            //Event button start Parabol_mov
            document.getElementById('start').addEventListener('click', 
                     function(e) {

                        //Create the object parabol_mov 
                        const vel_ini = document.getElementById('velocity').value,
                                angle_ini = document.getElementById('angle').value;

                        const parabol_mov = new Parabol_mov(vel_ini, angle_ini);

                        console.log(parabol_mov);

                        //Call method create_canvas
                        UIparabol.create_canvas();

                        //Call method draw_sin
                        UIparabol.draw_parabol(parabol_mov);

                        //Prevents the page from refreshing 
                        e.preventDefault();
            }) 
            //Prevents the page from refreshing
            e.preventDefault();
        }
)

//Event button clean
document.getElementById('clean').addEventListener('click',
    function (e) {
        
        //Create the object clean_canva
        UIclean = new Uinterface();

        //Call method clean_canvas
        UIclean.clean_canvas();

        //Prevents the page from refreshing 
        e.preventDefault();
    }
)