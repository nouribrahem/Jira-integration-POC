// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
import { json, text } from 'express';
import fetch from 'node-fetch';
const domain = 'https://nourhan15.atlassian.net';
const api = '/rest/api/3/search';
const query = '?jql=project=GP';
const url = domain + api + query;
const username = '11410120210436@stud.cu.edu.eg';
const token = 'ATATT3xFfGF0TOLDty3yqlPB8MPDamwj0XyZZuS184QRCjQgXVlYvtK600qUUlQ3Ko49oIfs1Lj7nSePR7NU4Pus4z9E9QfPpiaFzl3t0-VrQeb0o1UqOy4fpsPkfi1tTGUCk7pzImnO8q-95c-wOGB22hn1hzd7tMTAWcMtTlk5JJLhFwFhe3c=FC5BC9EF'
fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
        `${username}:${token}`
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
})
  .then(response => {
    return response.json();
  })

  ////////////////// roles /////////////////////////////
  // .then(json => {
  //   console.log(json);
  // })

  ////////////////// users in roles /////////////////////////////
  // .then(json => {
  //   const allUsers = [];
  //   const roles = Object.keys(json).slice(1);
  //   const rolesID = Object.values(json).slice(1);
  //     roles.forEach(users => {
  //       const role = rolesID[roles.indexOf(users)].toString();
  //       console.log(`Role: ${users} ID: ${role}`);
  //       fetch(role, {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Basic ${Buffer.from(
  //               `${username}:${token}`
  //           ).toString('base64')}`,
  //           'Accept': 'application/json'
  //         }
  //       })
  //         .then(response => {
  //           return response.json();
  //         })
          
  //         .then(json => {
  //           if (json.actors.length === 0) {
  //             return;
  //           }
  //           json.actors.forEach(actor => {
  //             allUsers.push(actor);
  //           });
  //           console.log("all users: ", allUsers);
  //         })
  //         .catch(err => console.error(err));
  //     });
  // })
  /////////////// issue types /////////////////////////////
  // .then(json => {
  //   json.issueTypes.forEach(issueType => {
  //     console.log(`${issueType.name}`);
  //   });
  // })  

  /////////////// issue status (containers in HL planning)//////////////////////////
  //  .then(json => {
  //   json[0].statuses.forEach(status => {
  //     console.log(status.name);
  //   });
  // })

  /////////////// get all issues in project with: name, type, watchers//////////////////////////
  .then(json => {
    json.issues.forEach(issue => {
      const url = issue.self;
      fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${Buffer.from(
              `${username}:${token}`
          ).toString('base64')}`,
          'Accept': 'application/json'
        }
      })
        .then(response => {
          return response.json();
        })
        .then(async json => {
          const watches = json.fields.watches.self;
          const watchers = [];
          await fetch(watches, {
            method: 'GET',
            headers: {
              'Authorization': `Basic ${Buffer.from(
                  `${username}:${token}`
              ).toString('base64')}`,
              'Accept': 'application/json'
              }
          })
          .then(response => {
            return response.json();
          })
          .then(json => {
            json.watchers.forEach(watcher => {
              watchers.push(watcher.emailAddress); // can make it a user object and push multiple attributes
            })
          })
          console.log(`Name: ${issue.fields.summary}, Issue type: ${issue.fields.issuetype.name}, watchers: ${watchers} `);

        })
        .catch(err => console.error(err));
    });
  })
  // .then(json => {
  //   console.log(json);
  // })
  .catch(err => console.error(err));