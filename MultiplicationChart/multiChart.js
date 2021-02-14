//print a 9x9 multi chart on the webpage

document.write("<table align='center'>");

for(var i =1; i<=9; i++){
    document.write("<tr>");
    for(var j=1; j<=i;j++){
        document.write("<td>");
        document.write(i+" x "+j+" = "+(i*j) +"&nbsp;&nbsp;&nbsp;");
        document.write("</td>");
    }
    //change lane
    // document.write("<br>");
    document.write("</tr>");
}

document.write("</table>");