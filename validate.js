function sprawdz()
{
	imie = document.forms["formularz"]["imie"].value;
	nazwisko = document.forms["formularz"]["nazwisko"].value;
	miasto = document.forms["formularz"]["miasto"].value;
	kod = document.forms["formularz"]["kod"].value;
	ulica = document.forms["formularz"]["ulica"].value;
	nrbud = document.forms["formularz"]["nrbud"].value;
	nrlok = document.forms["formularz"]["nrlok"].value;
	data = document.forms["formularz"]["data"].value;
	telefon = document.forms["formularz"]["telefon"].value;
	email = document.forms["formularz"]["email"].value;
	
	reg_imie = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,19}(([\s\-][A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,19}){1,2})?$/;
	reg_nazwisko = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,19}(([\s\-][A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,19}){1,2})?$/;
	reg_miasto = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,19}((\s[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,19}){1,4})?$/;
	reg_kod = /^[0-9]{2}-[0-9]{3}?$/;
	reg_ulica = /^([0-9]{1,4}\.?[\s])?[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,29}(([\s\-][A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,29}){1,4})?$/;
	reg_nrbud = /^[0-9]{1,5}[A-Za-z]?$/;
	reg_nrlok = /^([0-9]{1,5}[A-Za-z]?)?$/;
	reg_data = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19[0-9]{2}|20(0[0-9]|1[0-9]))$/;
	reg_telefon = /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
	reg_email = /^[A-Za-z0-9]{1,20}(([_\-\.][A-Za-z0-9]{1,20}){1,10})?@[A-Za-z0-9]{1,20}\.[A-Za-z]{1,10}$/;
	
	
	wynik = true;
	
	if(reg_imie.test(imie))
	{
		document.getElementsByName("imie")[0].style.background = "lightgreen";
	}
	else
	{
		wynik = false;
		document.getElementsByName("imie")[0].style.background = "pink";
	}
	
	if(reg_nazwisko.test(nazwisko))
	{
		document.getElementsByName("nazwisko")[0].style.background = "lightgreen";
	}
	else
	{
		wynik = false;
		document.getElementsByName("nazwisko")[0].style.background = "pink";
	}
	
	if(reg_miasto.test(miasto))
	{
		document.getElementsByName("miasto")[0].style.background = "lightgreen";
	}
	else
	{
		wynik = false;
		document.getElementsByName("miasto")[0].style.background = "pink";
	}
	
	if(reg_kod.test(kod))
	{
		document.getElementsByName("kod")[0].style.background = "lightgreen";
	}
	else
	{
		wynik = false;
		document.getElementsByName("kod")[0].style.background = "pink";
	}
	
	if(reg_ulica.test(ulica))
	{
		document.getElementsByName("ulica")[0].style.background = "lightgreen";
	}
	else
	{
		wynik = false;
		document.getElementsByName("ulica")[0].style.background = "pink";
	}
	
	if(reg_nrbud.test(nrbud))
	{
		document.getElementsByName("nrbud")[0].style.background = "lightgreen";
	}
	else
	{
		wynik = false;
		document.getElementsByName("nrbud")[0].style.background = "pink";
	}
	
	if(reg_nrlok.test(nrlok))
	{
		document.getElementsByName("nrlok")[0].style.background = "lightgreen";
	}
	else
	{
		wynik = false;
		document.getElementsByName("nrlok")[0].style.background = "pink";
	}
	
	if(reg_data.test(data))
	{
		document.getElementsByName("data")[0].style.background = "lightgreen";
	}
	else
	{
		wynik = false;
		document.getElementsByName("data")[0].style.background = "pink";
	}
	
	if(reg_telefon.test(telefon))
	{
		document.getElementsByName("telefon")[0].style.background = "lightgreen";
	}
	else
	{
		wynik = false;
		document.getElementsByName("telefon")[0].style.background = "pink";
	}
	
	if(reg_email.test(email))
	{
		document.getElementsByName("email")[0].style.background = "lightgreen";
	}
	else
	{
		wynik = false;
		document.getElementsByName("email")[0].style.background = "pink";
	}
	
	if(wynik) alert("Fomularz wypełniony poprawnie!");
	
	return wynik;
}
