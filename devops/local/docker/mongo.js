db.roles.find(
    {
      $or: [{
          "role": {
            "$in": ["Admin", "_id"]
          }
        },
        {
          "role": {
            "$in": ["User", "_id"]
          }
        }
      ]
    }
    ).forEach(function (i) {
      var temp = {
        "firstname": "gep",
        "lastname": "user",
        "username": "gepUser",
        "password": "gepUser@123",
        "email": "gepUser@gmail.com",
        "role": i._id,
        "Idtoken": "",
        "org": '@ibm.com"',
        "org_country": 'US',
        "org_sub1": 'GTS',
        "org_sub2": 'AVP',
        "org_sub3": 'EMEA',
        "loggedinDate": Date.now(),
        "loggedoutDate": Date.now()
      }
      if (i.role === "Admin") {
        temp.firstname = "gep";
        temp.lastname = "admin";
        temp.username = "gepAdmin";
        temp.password = "gepAdmin@123";
        temp.email = "gepAdmin@gmail.com";
        temp.role = i._id;
        temp.Idtoken = "";
        temp.org = "@10decoders.in";
        temp.org_country = "Ind";
        temp.org_sub1 = "ABC";
        temp.org_sub2 = "DEF";
        temp.org_sub3 = "GHI";
        temp.loggedinDate = Date.now();
        temp.loggedoutDate = Date.now();
      }
      db.User.insert(temp);
    });