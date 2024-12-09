import { json, text } from 'express';
import fetch from 'node-fetch';
const domain = 'https://nourhan15.atlassian.net';
const api = '/rest/api/3/';
var url = domain + api;
const username = '';
const token = '';

///////////////// get versions of issue////////////////////

// url += 'issue/GP-1';
// fetch(url, {
//           method: 'GET',
//           headers: {
//             'Authorization': `Basic ${Buffer.from(
//               `${username}:${token}`
//             ).toString('base64')}`,
//             'Accept': 'application/json',
//           }
//         })
//           .then(response => {
//             return response.json();
//           })
//           .then(json => {
//             console.log(json.fields.fixVersions);
//           })

///////////// get issues of release//////////////////// 

// url += `search?jql=${encodeURIComponent(`fixVersion = "Version 1.0"`)}`;
// fetch(url, {
//   method: 'GET',
//   headers: {
//     'Authorization': `Basic ${Buffer.from(
//         `${username}:${token}`
//       ).toString('base64')}`,
//     'Accept': 'application/json'
//   }
// })
// .then(response => {
//   return response.json();
// })
// .then(json => {
//   console.log(json);
// })

////////////// add issues to release//////////////////// 

// url += `issue/GP-2`;
// const update = {
//   fields: {
//     fixVersions: [
//       {
//         name: "Version 1.0"
//       }
//     ]
//   }
// };

// fetch(url, {
//       method: 'PUT',
//       headers: {
//         'Authorization': `Basic ${Buffer.from(
//           `${username}:${token}`
//         ).toString('base64')}`,
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(update)
//     })
//       .then(response => {
//         return response.json();
//       })
//       .then(json => {
//         console.log(json);
//       })

/////////////get related work of release//////////////////// 

// url += 'version/10000/relatedwork';
// fetch(url, {
//   method: 'GET',
//   headers: {
//     'Authorization': `Basic ${Buffer.from(
//         `${username}:${token}`
//       ).toString('base64')}`,
//     'Accept': 'application/json'
//   }
// })

//   .then(response => {
//     return response.json();
//   })
//   .then(json => {
//     console.log(json);
//   })

//////Takes time to reflect///////create related work to release//////////////////// 

// url += 'version/10000/relatedwork';
// const relatedWorkData = {
//   url: "https://chatgpt.com", // URL of the related work
//   title: "Example related work", // Title of the related work
//   category: "Reference" // Category of the related work
// };
// fetch(url, {
//     method: 'POST',
//     headers: {
//       'Authorization': `Basic ${Buffer.from(
//         `${username}:${token}`
//       ).toString('base64')}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(relatedWorkData)
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(json => {
//       console.log(json);
//     })
  

/////////////update a release/////////////////// 

// url += 'version/10000';
// const releaseData = {
//   released: true, // release the version
// };
// fetch(url, {
//   method: 'PUT',
//   headers: {
//     'Authorization': `Basic ${Buffer.from(
//       `${username}:${token}`
//     ).toString('base64')}`,
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(releaseData)
// })
//   .then(response => {
//     return response.json();
//   })
//   .then(json => {
//     console.log(json);
//   })

///////////////////get realses in a project//////////////////////// 

// url += 'project/GP/versions';
// fetch(url, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Basic ${Buffer.from(
//           `${username}:${token}`
//         ).toString('base64')}`,
//         'Accept': 'application/json',
//       }
//     })
//       .then(response => {
//         return response.json();
//       })
//       .then(json => {
//        console.log(json);
//         json.forEach(release => {
//           console.log(`Release: ${release.name}, release ID: ${release.id}, project ID: ${release.projectId}, released: ${release.released}, Description: ${release.description}, Release date: ${release.releaseDate}`);
//         });
//       })
      
         

///////////////// create a release //////////////////////////

// url += 'version';
// const releaseData = {
//   name: "Version 1.3", // Name of the release
//   description: "third release", // Optional
//   projectId: "10000", // Replace with your project's ID
//   released: false, // Set to true if already released
//   releaseDate: "2024-12-31" // Optional release date in YYYY-MM-DD format
// };
// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Authorization': `Basic ${Buffer.from(
//       `${username}:${token}`
//     ).toString('base64')}`,
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(releaseData)
// })
//   .then(response => {
//     return response.json();
//   })
//   .then(json => {
//     console.log(json);
//   })

  /////////////// get current user//////////////////////// ====> can add expand in query parameters
  
  // url += 'myself';
  // fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Basic ${Buffer.from(
  //         `${username}:${token}`
  //       ).toString('base64')}`,
  //       'Accept': 'application/json',
  //     }
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  // .then(json => {
  //   console.log(`Name: ${json.displayName}, accountId: ${json.accountId}, email: ${json.emailAddress}`);
  // })

  ///////////////////get projects of current user//////////  set start_at and check is_last bec. max is 50 (pagination)
  

  // url += 'project/search';
  // fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Basic ${Buffer.from(
  //           `${username}:${token}`
  //         ).toString('base64')}`,
  //         'Accept': 'application/json',
  //       }
  //     })
  //       .then(response => {
  //         return response.json();
  //       })
  // .then(json => {
  //   json.values.forEach(project => {
  //     console.log(`Project: ${project.name}, Key: ${project.key}, ID: ${project.id}, Type: ${project.projectTypeKey}`);
  //   });
  // })
      
  
  ////////////////// roles of a project///////////////////////////// 

  // url += 'project/GP/role';
  // fetch(url, {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Basic ${Buffer.from(
  //             `${username}:${token}`
  //           ).toString('base64')}`,
  //           'Accept': 'application/json',
  //         }
  //       })
  //         .then(response => {
  //           return response.json();
  //         })
  // .then(json => {
  //   console.log(Object.keys(json));
  // })

  ////////////////// users in roles and all users///////////////////////////// 

  // url += 'project/GP/role';
  // fetch(url, {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Basic ${Buffer.from(
  //             `${username}:${token}`
  //           ).toString('base64')}`,
  //           'Accept': 'application/json',
  //         }
  //       })
  //         .then(response => {
  //           return response.json();
  //         })
  // .then(json => {
  //   const allUsers = [];
  //   const roles = Object.keys(json).slice(1);
  //   const rolesID = Object.values(json).slice(1);
  //     roles.forEach(users => {
  //       const role = rolesID[roles.indexOf(users)].toString();
  //       //get role and role id
  //       console.log(`Role: ${users} ID: ${role}`);
  //       //get users in each role by fetching  role id
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

  // url += 'project/GP';
  // fetch(url, {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Basic ${Buffer.from(
  //             `${username}:${token}`
  //           ).toString('base64')}`,
  //           'Accept': 'application/json',
  //         }
  //       })
  //         .then(response => {
  //           return response.json();
  //         })
  // .then(json => {
  //   json.issueTypes.forEach(issueType => {
  //     console.log(`${issueType.name}`);
  //   });
  // })  

  /////////////// issue status (containers in HL planning)////////////////////////// 

  // url += 'project/GP/statuses';
  // fetch(url, {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Basic ${Buffer.from(
  //             `${username}:${token}`
  //           ).toString('base64')}`,
  //           'Accept': 'application/json',
  //         }
  //       })
  //         .then(response => {
  //           return response.json();
  //         })
  //  .then(json => {
  //   json[0].statuses.forEach(status => {
  //     console.log(status.name);
  //   });
  // })

  /////////////// get all issues in project with: name, type, watchers////////////////////////// 
  
  // url += 'search?jql=project=GP';
  // fetch(url, {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Basic ${Buffer.from(
  //             `${username}:${token}`
  //           ).toString('base64')}`,
  //           'Accept': 'application/json',
  //         }
  //       })
  //         .then(response => {
  //           return response.json();
  //         })
  // .then(json => {
  //   json.issues.forEach(issue => {
  //     const url = issue.self;
  //     fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Basic ${Buffer.from(
  //             `${username}:${token}`
  //         ).toString('base64')}`,
  //         'Accept': 'application/json'
  //       }
  //     })
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(async json => {
  //         const watches = json.fields.watches.self;
  //         const watchers = [];
  //         await fetch(watches, {
  //           method: 'GET',
  //           headers: {
  //             'Authorization': `Basic ${Buffer.from(
  //                 `${username}:${token}`
  //             ).toString('base64')}`,
  //             'Accept': 'application/json'
  //             }
  //         })
  //         .then(response => {
  //           return response.json();
  //         })
  //         .then(json => {
  //           json.watchers.forEach(watcher => {
  //             watchers.push(watcher.emailAddress); // can make it a user object and push multiple attributes
  //           })
  //         })
  //         console.log(`Name: ${issue.fields.summary}, Issue type: ${issue.fields.issuetype.name}, watchers: ${watchers} `);

  //       })
  //       .catch(err => console.error(err));
  //   });
  // })
  
