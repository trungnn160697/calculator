/*
* @Author: Trungnn
* @Date:   2018-08-20 14:59:04
* @Last Modified by:   ngoc trung
* @Last Modified time: 2018-08-20 22:05:22
*/
$(document).ready(function(){

	$('#multiplication').attr({'disabled': 'true'});
	$('#division').attr({'disabled': 'true'});

	$('.number').click(function(event) {
		var number = $(this).html();
		var value = $('#calculation').val();
		$('#calculation').val(value+number);
		$('#multiplication').removeAttr('disabled');
		$('#division').removeAttr('disabled');
	});

	$('#dot').click(function(event) {
		var value = $('#calculation').val();
		var dot = $('#dot').html();
		$('#calculation').val(value+dot);
		$('#dot').attr({'disabled': 'true'});
	});

	$('.operation').click(function(event) {
		var operation = $(this).html();
		var value = $('#calculation').val();
		$('#calculation').val(value+operation);
		$('#dot').removeAttr('disabled');
	});

	$('#refresh').click(function(event) {
		$('#calculation').val('');
		$('#result').val('0');
		$('#dot').removeAttr('disabled');
	});

	$('#del').click(function(event) {
		var value = $('#calculation').val().split("");
		var result = "";
		for (var i = 0; i < value.length-1; i++) {
			result += value[i];
			if(value[value.length-1]=='.'){
				$('#dot').removeAttr('disabled');
			}
		}
		$('#calculation').val(result);
	});

	$('#equal').click(function(event) {
		var value = $('#calculation').val().split("");
		for (var i = 0; i < value.length; i++) {
			if(value[i]=='x'){
				value[i] = '*';
			}
			if(value[i]==':'){
				value[i] = '/';
			}
		}
		var result = "";
		for (var i = 0; i < value.length; i++) {
			result += value[i];
		}
		if(result!=''){
			$("#result").val(eval(result));
		}
	});

})