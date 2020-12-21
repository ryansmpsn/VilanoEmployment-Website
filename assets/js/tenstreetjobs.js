function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();

  var URL = "https://cors-anywhere.herokuapp.com/https://dashboard.tenstreet.com/api/jr/job_requisitions.php?company_id=34969&jr_api_key=postaljobreqs&client_id=177&password=gh2lkb$P5$dz1Rj4$ko$^N";

  xmlhttp.open("GET", URL, true);

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };

  xmlhttp.send();
}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;

  var table = "<thead><tr><th>Job Company</th><th>Job Title</th><th>Description</th><th>City</th><th>State</th><th>Job Link</th></tr></thead><tbody>";
  var x = xmlDoc.getElementsByTagName("JobRequisition");
  for (i = 0; i < x.length; i++) {
    let jobDesc = x[i].getElementsByTagName("JobDescription")[0].childNodes[0].nodeValue;
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("JobCompany")[0].childNodes[0].nodeValue +
      "</td><td>" +
      (x[i].getElementsByTagName("JobTitle")[0].childNodes.length >= 1 ? x[i].getElementsByTagName("JobTitle")[0].childNodes[0].nodeValue : x[i].getElementsByTagName("Category")[0].childNodes[0].nodeValue) +
      "</td><td>" +
      htmlDecode(jobDesc) +
      "</td><td>" +
      x[i].getElementsByTagName("City")[0].childNodes[0].nodeValue +
      "</td><td>" +
      (x[i].getElementsByTagName("State")[0].childNodes.length >= 1 ? x[i].getElementsByTagName("State")[0].childNodes[0].nodeValue : " ") +
      "</td><td><a target='_blank' href=" +
      x[i].getElementsByTagName("URL")[0].childNodes[0].nodeValue +
      ">Apply</a></td></tr>";
  }
  table += "</tbody>";

  document.getElementById("careerTable").innerHTML = table;
}

function htmlDecode(input) {
  var e = document.createElement("textarea");
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

loadXMLDoc();
