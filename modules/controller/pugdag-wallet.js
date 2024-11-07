import {PugdagWallet as BasePugdagWallet} from '/node_modules/@pugdag/ux/pugdag-ux.js';

class PugdagWallet extends BasePugdagWallet{
	makeFaucetRequest(subject, args){
		let origin = 'https://faucet.pugdag.com';
		//origin = 'http://localhost:3000';
		const {address, amount} = args;
		let path = {
			'faucet-available': `available/${address}`,
			'faucet-request': `get/${address}/${amount}`
		}[subject];

		if(!path)
			return Promise.reject("Invalid request subject:"+subject)

		return fetch(`${origin}/api/${path}`, {
			method: 'GET'
		}).then(res => res.json())
	}
}

PugdagWallet.define("pugdag-wallet")
