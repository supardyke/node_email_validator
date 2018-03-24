/*!
 * email validator
 * Copyright(c) 2018 Supardyke
 * ISC Licensed
 */

'use strict';

exports.check_email = check_email; // to send back to module user

let email;  // name of variable
let email_status = false;  // status to return true false
const valid_providers = ['gmail.com','yahoo.com','rocketmail.com','yahoo.co.uk'];  // name of variable

function check_email(email){
	let email_check = email.search('@');
	if (email_check>0) {		
		let diff_providers = valid_providers.slice(',');
		let email_provider = email.split('@');
		email_provider = email_provider[1];
		if (email_provider !== null) {
			for(let a = 0;a < diff_providers.length;a++){
				if (diff_providers[a] == email_provider) {
					email_status = true;
				};
			}
			if (email_status == false) {
				let domain_check = email_provider.search('.com');
				if (domain_check >0) {
					email_status = true;
				};
			};			
		}
	};
	return email_status;
}