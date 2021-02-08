var clevertap = { event: [], profile: [], account: [], onUserLogin: [], notifications: [], privacy: [] };
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({ "id": "Z44-Z4K-K65Z" });
clevertap.privacy.push({ optOut: false }); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({ useIP: false }); //set the flag to true, if the user agrees to share their IP data
(function () {
  var wzrk = document.createElement('script');
  wzrk.type = 'text/javascript';
  wzrk.async = true;
  wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wzrk, s);
})();

function onLogin() {
  console.log('----inside login----')
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  console.log({ name, email, phone })
  clevertap.onUserLogin.push({
    "Site": {
      "Name": name,            // use the Name variable
      "Email": email,         // Email address of the user
      "Phone": `+91${phone}`,           // Phone (with the country code
      "DOB": new Date()                 // Date of Birth. Date object   
    }
  });
}
