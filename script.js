
var df = document.forms;
var textarea = document.getElementById('teaxtarea');
var save_txt = document.getElementById('text');
var save = document.getElementById('save');
var s_t = document.getElementById('save_text');

// кнопки редагування та зберігання тексту
$('#edit').click(function () {  // переносимо текст для зберігання
	$('textarea').html($('#text').html());
	$('#btn_style').css('display','none');
	$('#edit_text').css('display','block');
	$('#choose_list').css('display','none');
	$('#choose_to_add').css('display','none');
	$('#table_block').css('display','block');
    })

    $('#save').click(function () { // преносимо текст для його редагування
        $('#text').html($('textarea').val()); 
    })


	
//додаємо вікно для вибору параметрів таблиці 

var list = document.getElementById('list');
var table = document.getElementById('table');
//var add = document.getElementById('add');

//    df.f2.add.onclick = function () {
//        document.getElementById('choose_to_add').style.display = 'block';
//        table.checked = 'true';
//        document.getElementById('edit_text').style.display = 'none';   
//    }

    $('#add').click(function(){
        $('#choose_to_add').slideDown(2000,"linear");
        $('#edit_text').css("display","none");
        $('#choose_list').css('display','none');
        $('#table_block').css('display','block');
        table.checked = 'true';
    })
//викликаємо подію для вибору параметрів таблиці

    $('#table').click(function() {
        $('#choose_list').css('display','none');
        $('#table_block').slideDown(1000,"linear");
    })

//випливаюче вікно інпутів таблиці
    //js
var inp_w_cell = document.getElementById('width_cell');
var inp_h_cell = document.getElementById('height_cell');
var inp_w_bord = document.getElementById('w_border');
var inp_lst_ul = document.getElementById('list_items_ul');
var inp_lst_ol = document.getElementById('list_items_ol');
 
var popup2 = document.getElementById ('popup2');
var popup3 = document.getElementById ('popup3');
var popup4 = document.getElementById ('popup4');
var popup5 = document.getElementById ('popup5');
var popup6 = document.getElementById ('popup6');

    // jQuery

    $('#table_row').mouseover(function(){
        $('#popup').addClass('show');
        $('#popup').css("display","block");
    })
    $('#table_row').mouseout(function(){
        $('#popup').removeClass('show');
        $('#popup').css("display","none");
    })

    $('#table_cell').mouseover(function(){
        $('#popup1').addClass('show');
        $('#popup1').css("display","block");
    })
    $('#table_cell').mouseout(function(){
        $('#popup1').removeClass('show');
        $('#popup1').css("display","none");
    })


//pop ups

    inp_w_cell.onmouseover = function () {inpMouseover(popup2);}
    inp_w_cell.onmouseout =  function () {inpMouseout(popup2);}
    inp_h_cell.onmouseover = function () {inpMouseover(popup3);}
    inp_h_cell.onmouseout =  function () {inpMouseout(popup3);}
    inp_w_bord.onmouseover = function () {inpMouseover(popup4);}
    inp_w_bord.onmouseout =  function () {inpMouseout(popup4);}
    inp_lst_ul.onmouseover = function () {inpMouseover(popup5);}
    inp_lst_ul.onmouseout =  function () {inpMouseout(popup5);}
    inp_lst_ol.onmouseover = function () {inpMouseover(popup6);}
    inp_lst_ol.onmouseout =  function () {inpMouseout(popup6);}
   

    function inpMouseover(a){
        a.classList.toggle('show');
        a.style.display = 'block';
    }

    function inpMouseout(a){
        a.classList.remove('show');
        a.style.display = 'none';
    }
  //function clearInput

 function clearInput(a,b,c,d,e){
	$(a).val(''); 
	$(b).val(''); 
	$(c).val('');
	$(d).val(''); 
	$(e).val('');
  }  
    
//валідація параметрв таблиці
   function validationtable(a,b,c,d,e){ 
       if(((a) == '') || (isNaN(a)) || ((b) == '') || (isNaN(b)) || ((c) == '') || (isNaN(c)) || ((d) == '') || (isNaN(d)) || ((e) == '') || (isNaN(e)) || ((a>100) || (a<1)) || ((b>100) || (b<1))|| (c<10) || ((d>100) || (d<1))|| ((e>20) || (e<1)) || 
          (a.length>4) || (b.length>4) || (c.length>4) || (d.length>4) || (e.length>4)){
           return false;
       }else{
            return true;
       }
           }
    function validationlist(a){ 
       if(((a) == '') || (isNaN(a)) || ((a>100) || (a<1)) || 
          (a.length>4)){
           return false;
       }else{
        return true;
       }
           }
    
//пишемо таблицю
var btn_create = document.getElementById('create_btn');


    btn_create.onclick = function(){ //пишемо таблицю у textarea
        
        var t_row = parseInt(document.getElementById('table_row').value);
        var t_cell = parseInt(document.getElementById('table_cell').value);
        var width_cell = parseInt(document.getElementById('width_cell').value);
        var height_cell = parseInt(document.getElementById('height_cell').value);
        var w_bord = parseInt(document.getElementById('w_border').value);
        var t_bord_select = document.getElementById('style_border');
        var t_bord = t_bord_select.options[t_bord_select.selectedIndex].value;
        var col_bord_select = document.getElementById('col_border');
        var col_bord = col_bord_select.options[col_bord_select.selectedIndex].value;
        
        if (validationtable(t_row,t_cell,width_cell,height_cell,w_bord)) {
        var text_table = '<table style="border:' + w_bord+'px ' + t_bord+' ' + col_bord+' ' + '">';
    
        for(var i=1; i<=t_row; i++){
            text_table += '<tr>';
            for(var j=1; j<=t_cell; j++){
                text_table +='<td class="myborder" width="'+width_cell+'px'+'" '+'height="'+height_cell+'px ">Text</td>'; 
            }
            text_table += '</tr>';
        }
            text_table += '</table>';
           console.log(text_table);
            df.f2.textarea.value += text_table;
            
        $('#choose_to_add').css('display','none');
        $('edit_button').css('display','flex');
        $('#save_text').css('display','block');
        $('#edit_text').css('display','block');
			
   }
     else{
//		  $('input[type="text"]').after('<p class="red">Невірно заповнене поле!</p>');
		 alert('Перевірте чи правильно заповнені поля!');
    }
		clearInput($('#table_row'),$('#table_cell'),$('#width_cell'),
		$('#height_cell'),$('#w_border'));
    }
    

//викликаємо подію для вибору параметрів списку
    list.onclick = function() {
        $('#table_block').css('display','none');
        $('#choose_list').slideDown(1000,"linear");;
    }

//створюємо список
var btn_ul = document.getElementById('ul');
var btn_ol = document.getElementById('ol');
var div_ul = document.getElementById('Unordered_List');
var div_ol = document.getElementById('Ordered_List');
   
//вибираємо номерований або маркований список
    btn_ul.onclick = function(){
       div_ul.style.display = 'block';
        div_ol.style.display = 'none'; 
    }
    btn_ol.onclick = function(){
       div_ol.style.display = 'block';
        div_ul.style.display = 'none'; 
    }

// Обираємо маркери списку і формуємо список
var btn_create_listUl = document.getElementById('create_list_btn');
var btn_create_listOl = document.getElementById('create_listOl_btn');

    btn_create_listUl.onclick = function(){ //маркований список пишемо у textarea
        var items_Ul = parseInt(document.getElementById('list_items_ul').value);
        var marker_list_select = document.getElementById('type_ul');
        var marker_list = marker_list_select.options[marker_list_select.selectedIndex].value;  
        
      if(validationlist(items_Ul)){ 
            var list_ul = '<ul style="list-style-type:'+marker_list+'">';
            for(var i=0; i<items_Ul; i++){
                    list_ul += '<li>Items</li>';
            }
            list_ul += '</ul>';
    
            df.f2.textarea.value += list_ul;
     
        $('#choose_to_add').css('display','none');
        $('edit_button').css('display','flex');
        $('#save_text').css('display','block');
        $('#edit_text').css('display','block');
    }else{
//        $('input[type="text"]').after('<p class="red">Невірно заповнене поле!</p>');
		alert('Перевірте чи правильно заповнені поля!');
	}
		clearInput($('#list_items_ul'));
}

// Обираємо спосіб номерації списку і формуємо список

    btn_create_listOl.onclick = function(){    //номерований список пишемо у textarea
        
        var items_Ol = parseInt(document.getElementById('list_items_ol').value); 
        var number_list_select = document.getElementById('type_ol');
        var number_list = number_list_select.options[number_list_select.selectedIndex].value; 
  
      if(validationlist(items_Ol)){
      var list_ol = '<ol type="'+number_list+'">';
        for(var i=0; i<items_Ol; i++){
            list_ol += '<li>Items</li>';
        }
        list_ol += '</ol>';
      
        df.f2.textarea.value += list_ol;
          
        $('#choose_to_add').css('display','none');
        $('edit_button').css('display','flex');
        $('#save_text').css('display','block');
        $('#edit_text').css('display','block');
      }else{
//		  $('input[type="text"]').after('<p class="red">Невірно заповнене поле!</p>'); 
		  alert('Перевірте чи правильно заповнені поля!');
		   }
		clearInput($('#list_items_ol'));
}
          
          
//вікно для стилізації тексту у блоці зберігання інформації; 
var btn_style = document.getElementById('style');

    $('#style').click(function(){
       $('#btn_style').slideDown(1000,'linear');
        $('#edit_text').css('display','none');
        $('#color_table').css('display','none');
		$('#bgcol_table').css('display','none');
		$('#choose_to_add').css('display','none');
    })
    
//змінюємо розмір font-size шрифта у save_txt;
    for(var i=0; i<df.f3.length; i++){
        df.f3.elements[i].addEventListener('click',function(){
          save_txt.style.fontSize = this.value;  
        })     
    }

//стиль шрифта font-family

var f_fam = df.f6.font_fam;
    f_fam.onchange = function(){    //change font-family
        for(var i=0; i< f_fam.length;i++){ 
            if(f_fam.options[i].selected){
             save_txt.style.fontFamily = f_fam.options[i].value;  
            }
        }
    }

//колір шрифта  та фон блоку зберігання тексту
var btn_col = document.getElementById('color');
var col_font =  document.getElementsByClassName('col_cell');
var col_mas = [ 'aqua','blueviolet','greenyellow','brown','skyblue','crimson','fuchsia','lightseagreen','yellow'];
var bgcol_mas = [ 'aqua','blueviolet','greenyellow','brown','skyblue','crimson','fuchsia','lightseagreen','yellow'];

//відкривання блоку для вибору кольру шрифта
    $('#color').focus(function(){
        $('#color_table').css('display','flex');
		$('#bgcol_table').css('display','none');
    })
   
   //зміна кольру шрифта
    for(var i=0; i< col_mas.length; i++){
		 col_font[i].onclick = function(){
        save_txt.style.color = col_mas[i];
        }
    }
    
 // changing background-color  in div(save_text);
var btn_bgcol = document.getElementById('bgcol');
var bgcol = document.getElementsByClassName('bgcol_cell');
   
btn_bgcol.onfocus=function(){
        document.getElementById('bgcol_table').style.display = 'flex';
		document.getElementById('color_table').style.display = 'none';
    }
    
	//зміна фону у блоці зберігання тексту
    for(var i=0; i< bgcol_mas.length; i++){
		 bgcol[i].onclick = function(){
        s_t.style.background = bgcol_mas[i];
		save_txt.style.background =  bgcol_mas[i];
        }
    }

// товщина шрифта;
     var bold_font = document.getElementById('bold');
     var italic_font = document.getElementById('italic');
    
    bold_font.onclick = function(){                             //bold
        if(this.checked){save_txt.style.fontWeight = 'bold';
        }else{save_txt.style.fontWeight = 'normal';}
             
         }           
    italic_font.onclick = function(){                           //italic
        if(this.checked){save_txt.style.fontStyle = 'italic';
        }else{save_txt.style.fontStyle = 'normal';}
             
         } 
    
    // open modal window
    
var btn_block = document.getElementById('block');
var modal_wndw = document.getElementById('modal');

    btn_block.onclick = OpenModal; //вікно блокування програми

function OpenModal(){
     modal_wndw.style.display = 'block';
    password.value = '';
}


// modal window ,password
var open_inp = document.getElementById('to_pass');
var btn_exit = document.getElementById('exit');
var password = document.getElementById('mod_pass');

//перевіряємо правильність введеного паролю
    btn_exit.onclick = ExitToPage; 

    function ExitToPage(){  
        if( password.value == 'tttt'){
            modal_wndw.style.display = 'none';
            password.style.border = '';
        }
        else {
            
           $('#mod_pass').after('<p class="red">Спробуйте ще раз! Невірний пароль або пароль не введений!</p>');
            password.style.border = '2px solid red';
            password.value = '';
            }
        }
