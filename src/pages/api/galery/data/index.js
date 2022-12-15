const images = [
	{
		id: 1,
		category: {
			id: 1,
			name: 'lyd',
		},
		name: 'Restaurante',
		image:
			'https://bnz06pap001files.storage.live.com/y4mDpVGLSvJwvGBHgpsFPKgmc0xFTxQI5VJ-aXxfjguzYLflnhLNZLRxoSawuo8PS4dyv3w8pc0sIrYcp3MoouoFnjEtJI4KlQUyKpvJPC2Xwa49TQG6_hgOkVl6Ck8XCWKBDF_gMX_-ArAtrz_bw_cAbIEdW7MMP8or7eEBxyOd3G5YGlXmN6gKj-IZu5KjPZ6?width=1024&height=683&cropmode=none',
	},
	{
		id: 2,
		category: {
			id: 1,
			name: 'lyd',
		},
		name: 'Restaurante',
		image:
			'https://bnz06pap001files.storage.live.com/y4m8m2j9zGkNkAV5kLYaucJrWC6sY2LKSqb9hPcgXAiv0HiOo3g6LwpH1EcV8-oXMuah2M_Xa1yUrfZ3gufusuXCTt24F28S5RG_7R7jer_mYt6tnMkc8ArgtEq_jMQzqZD7BpP3wyB2AIWPsNLd23h4tT0zw0n6mwZAYBFmH_XxQPmEJlBtodfDU82JrOPgv1V?width=1080&height=1080&cropmode=none',
	},
	{
		id: 3,
		category: {
			id: 1,
			name: 'lyd',
		},
		name: 'Restaurante',
		image:
			'https://bnz06pap001files.storage.live.com/y4mF1323CcvdTf6ITqYl7ESlLLnOoJA8njtBcte7Sm4f7qF7UcBUFq7MYvpqgqY3RMDnZ4WsVHlnOniFDTQ-PdxkEgJ5mAJ4Ph79uLfGVr9Vmt-KqI56u084VHuQKwweZsK7JzyYdeFbHEM3GO6UNRy20ecMZ97D1aX61ZS830SnOOsHnZNhYPPI2SgEtmZiThB?width=1080&height=1080&cropmode=none',
	},
	{
		id: 4,
		category: {
			id: 1,
			name: 'lyd',
		},
		name: 'Restaurante',
		image:
			'https://bnz06pap001files.storage.live.com/y4mpgWY95GjHsbTzxUr7a3JrdV6DVu9rGh7vJ0sn3JGQGVnFU1btgyhlNKjqP6u0RvxLIWUPfU-Pa-UHBNOIVvUWGQzPl8bklgJ6GgyAnFEQz4JtXMt5-zwsqNjxFPHD-Gn7JC4i_VNHPNZ-TLn5q50tC4nGc9cmpaXDEy9dpzid2u6CP4hcftqpI8DyOqkolRC?width=1080&height=1080&cropmode=none',
	},
	{
		id: 5,
		category: {
			id: 1,
			name: 'lyd',
		},
		name: 'Nova',
		image:
			'https://bnz06pap001files.storage.live.com/y4mV2OPHkgHnaEhalt7CBmHlYhVA0meJg2a3L0KSVAGMubi42sj0qILrjv2J1EhurfCm-ODGDvfePYLX_kyTNZkUWrz3OhvdCwXb1XXJoAcjfHcaB-D6JoW5cU30AaHWeE2kr7Agmgl15QMPGelz9N2XOrwO64haHzVJbJVtZwLgZ4wicgN7u-gu0lqWXMNoY-B?width=1024&height=576&cropmode=none',
	},
	{
		id: 6,
		category: {
			id: 1,
			name: 'lyd',
		},
		name: 'Nova',
		image:
			'https://bnz06pap001files.storage.live.com/y4mdtyt6DEARSgeJeYUtX2-vyxUCVMkbb3vO7G_fvQer_hECMnq3i2zMSNgB2IAxI3t9Qo9jczYCi5bvV543kDABOi92-CkWI8WkW0hBnOnPfoAy0NwAAFk5tg47YLnHJBW3KlgUPYKXyM_qPhuW8L4wTOJRMvp0ZJYYLFWFuHDKHaQKP_VaDhqWtjcfTpktIzk?width=724&height=1024&cropmode=none',
	},
	{
		id: 7,
		category: {
			id: 1,
			name: 'lyd',
		},
		name: 'Nova',
		image:
			'https://bnz06pap001files.storage.live.com/y4mna-zxeGvV9bLZKi4KeOlbXhO3EfMfgoI-kqhrNjVXM4t686nNxcvMcR081cFMDRqHfE4lkvBM5WdsuXZi9eyEVuyDTGlOK4pB23zmIMlP-QtchA3lzmKBfp7rcA8WNurSApMo87SHGnYgqRWXs-4VvBY_a4nckcbH6tykhAuvM2KP_ZG4pNRQmXj4hQErtr7?width=1024&height=778&cropmode=none',
	},
	{
		id: 8,
		category: {
			id: 0,
			name: 'others',
		},
		name: 'Cabaña Glamping',
		image:
			'https://bnz06pap001files.storage.live.com/y4mrlryDKDU90H_VHmMEfCHErn0Aff_LH6D9KhTtwDxTSYgss4jnC2UfvH9BH23MDOGyBFwsq69as9cPkSxerc3_iwCPpIG2llZCEX8ge5GQHGisOr7i4E6xG06JSpkA5SunBjGr3vcYAud1yxYfj6prD-tSxdmw9V8URwXjK7Azm9BeFRo_4fbOVFQULj8zoWK?width=1280&height=720&cropmode=none',
	},
	{
		id: 9,
		category: {
			id: 0,
			name: 'others',
		},
		name: 'Cabaña Glamping',
		image:
			'https://bnz06pap001files.storage.live.com/y4m8Ap8SK9lChONygZEzSkENCpdGM1y0gbWJshWXuLG15TK-EAB5MNg1HuW1R8UYLQ1XcQRrPqVUploBfEoZNtGg_7wSwekUzFk2XsQuBJFUBkFeKQYbs22FgkKNPVC1fDWIyXRrZgV6cNYW1dQTiK38gENCXcwemOEifADwqlfgLvr4zkruQti7PRvGtRoS6cn?width=1280&height=720&cropmode=none',
	},
	{
		id: 10,
		category: {
			id: 0,
			name: 'others',
		},
		name: 'Cabaña Glamping',
		image:
			'https://bnz06pap001files.storage.live.com/y4mvlSYxoM9gryphtkepTnalyKKaQ-KMiqgbFoWOHUiKZSj-pzBSd9mxdeCwF1Ugmj2xLHpkJXj0PJiEoW4fIY8eGA-IqRhQ4vb40qeB_tEDTU20PSQ3Ji-5A6p9u3sudR0t20AEtBAr_XcPxDS0i_syBZkI1q8Dah3rLABI3CUJdweHw7Ozruodyh5_VR_tkF0?width=1280&height=720&cropmode=none',
	},
	{
		id: 11,
		category: {
			id: 0,
			name: 'others',
		},
		name: 'Cabaña Glamping',
		image:
			'https://bnz06pap001files.storage.live.com/y4mfXTplwutaOpNxdK2i56PifSnlN6sHcqxi8DIb7QwKxWF4LI_iqrWK4rW_wREKm15x81vByKiSw5aCiJgKuXijwUCDZ06_-RliQR4bMV3BWHKu50CQZ-P_jAFV31tUVnHi9880ofs9PlXf3LRP6DFiYbiEGJDih-pLHRv17uw2Qir1lMlGXaKqkYIRDUWUJa0?width=1280&height=720&cropmode=none',
	},
	{
		id: 12,
		category: {
			id: 0,
			name: 'others',
		},
		name: 'Cabaña Glamping',
		image:
			'https://bnz06pap001files.storage.live.com/y4mvytyB-KLmYdRM-FQPLfwsNvqadVoTKZkHJnfqVrSUjrcI8ul92gpZHvjtbmYarQMutg5r-oI4vJ31vgk2aiNnasSF8cnz8yp2Ywj1wlJeJYEj_0kSBQjjC0i-qtcu4DtQraSmChcjC19JawZvmp1c2YGOX-rZ6eTSEO0uoo5VGY40z04dX4q0Yp6VPE-2CBz?width=1280&height=720&cropmode=none',
	},
	{
		id: 13,
		category: {
			id: 0,
			name: 'others',
		},
		name: 'Cabaña Glamping',
		image:
			'https://bnz06pap001files.storage.live.com/y4mMB-x_LBiM45jnJtdY5AVdTAlKUqCDQstlEQEb_NWkmIC4f8mA_tZzO9zxSlCPoDWb9RZOgYPdzhpT38BruYQJGTaGP6aMehHDs9UOXcglXLymPuAE_xWkPvKefKmSMC4ijBcDEwpHioGbKYptPcB6hwBjLWF7mbV7ZEdrxfcpZumGxUvIT88CMScEeXJEf1k?width=1024&height=1024&cropmode=none',
	},
	{
		id: 14,
		category: {
			id: 0,
			name: 'others',
		},
		name: 'Cabaña Glamping',
		image:
			'https://bnz06pap001files.storage.live.com/y4mLQ9bS-nJ9Bpb469fmFzywcgJc0KIC9Yhfwml566VgBgkfSzzNZKpc0jNREdiUGyABKP3GWGXA-nj3x7l6XpID47slXLiiVuuWWJhhSqWEuJoRUcRh7h4REbnAJcLL_ENOhcaUiZD3OhpLPD3HZicrureIwePeYO3k_qIdYneUXvdFf_2J-XdtPTDGylWexUw?width=1024&height=1024&cropmode=none',
	},
	{
		id: 15,
		category: {
			id: 0,
			name: 'others',
		},
		name: 'Cabaña Glamping',
		image:
			'https://bnz06pap001files.storage.live.com/y4myYNx1Se60W3siWJiaOUHmtCQvB2-Sgmz4CS5lCOCi_XoMJg9s07W2jM5I93fKE1fb31BYCeaEiqYsqUFcihzRP8yDkaQ1GLPwU4vlYVK3qd6hRGllXuT5tM6HlFn7LbNdFBI0G6Sgx_NZSwIhHbZ7jD1kQqsa08BA4KSQZ9cu4t8I6it1wsfpqvegeeRYhbR?width=1024&height=1024&cropmode=none',
	},
	{
		id: 16,
		category: {
			id: 0,
			name: 'others',
		},
		name: 'Cabaña Glamping',
		image:
			'https://bnz06pap001files.storage.live.com/y4mNWGOW4z22m-KVWuKq7b3vybBXZ6gj9Z4RFNaW7AZGxUyRZWkWQLPo5ujEd0-CPNgKcLZAP0hnJprQlnxETxc8TpqHcX0fx7CWh7dKELWVmUgSBgT09EJvMXh-0buucDF4FQixTTHnPgldATRjTNHmhWkEKKGcGjm-AoyDRzBt8rW9OtCFXmEXWpH8h_floiD?width=1024&height=1024&cropmode=none',
	},
	{
		id: 17,
		category: {
			id: 0,
			name: 'others',
		},
		name: 'Cabaña Glamping',
		image:
			'https://bnz06pap001files.storage.live.com/y4me7Fm9UXNqOYzJRPYqYAIoPpI_O5fo6ww1VLLD5-8eiBT9y51epHIGbMoYPprHbp79kDeoI0BweIe95NQ_6Cz6i7Fi--u69DGNx-Zv_1f6JrSJOPTqUpbI6Lh4cPfmpUhSt_APisnYQIRm9Uwa5CTp3u8bZsqMap9-3STG_9UAD7iyejiAS_GqF1ayeL8SfMl?width=1024&height=1024&cropmode=none',
	},
];

export { images };
