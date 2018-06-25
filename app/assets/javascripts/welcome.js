$(document).ready(function(){
  var mask = '(XXX)-XXX-XXXX' ;
  var numbers = [];

  phone_number_field = $('#phone-number');
  phone_number_field.val(mask);
  phone_number_field.on('input', function() {
    var current_value = this.value;
    var new_str = update_phone_number(current_value);
    this.value = new_str;
  });

  function update_phone_number(str){
    // Generate new string to be displayed
    var final_str = '(XXX)-XXX-XXXX'

    if( str.length == 15 ){
      last_char = str.slice(-1);
      str = str.slice(0,-1)

      if( numbers.length < 10 && !isNaN(parseInt(last_char)) ){
        numbers.push(last_char)
      }
    }else if( str.length == 13 ){
      if( numbers.length > 0 ){
        numbers.pop()
      }
    }

    for(var i=0; i < numbers.length; ++i){
      final_str = final_str.replace("X", numbers[i]);
    }

    return final_str
  }
});
