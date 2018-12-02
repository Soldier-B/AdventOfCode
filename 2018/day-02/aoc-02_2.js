function aoc_2_2() {
	for (var i = 0; i < arguments.length - 1; i++) {
		for (var j = i + 1; j < arguments.length; j++) {
			if (offByOne(arguments[i], arguments[j])) {
				for (var k = 0; k < arguments[i].length; k++) {
					if (arguments[i][k] != arguments[j][k])
						return arguments[i].substr(0, k) + arguments[i].substr(k + 1);
				}
			}
		}
	}
}

function offByOne(a, b) {
	for (var i = 0, d = 0; i < a.length; i++)
		if (a[i] != b[i]) {
			d++;
			if (d > 1) return false;
		}
	return d == 1;
}

aoc_2_2(
	'prtkqyluibmtcwqaezjmhgfndx',
	'prtkqylusbsmcwvaezjmhgfndt',
	'prgkqyluibsocwvamzjmhgkndx',
	'prjkqyluibsocwvahzjmhgfnsx',
	'prtkqylcibsocwvzezjohgfndx',
	'prtkqyluiksocwziezjmhgfndx',
	'prikqyluiksocwvaezjmkgfndx',
	'prtkgyluibsocwvwezjehgfndx',
	'prtkqyluiysocwvaezjghxfndx',
	'prtkqwluibsoxwvaezjmhgfhdx',
	'prtkqylgibsocwvabzjmhzfndx',
	'prtknyltibnocwvaezjmhgfndx',
	'prdkqyluibrocwvaezjmhgnndx',
	'prtwqyluibsoctvcezjmhgfndx',
	'mrtkqyluibgocwvakzjmhgfndx',
	'prtkqaouibsocwvaezjmhwfndx',
	'prtkqyluihjocwvaezjmhgfpdx',
	'prtkqyluikfxcwvaezjmhgfndx',
	'prtkqybuixsocwvaczjmhgfndx',
	'pvtkayluibsocwxaezjmhgfndx',
	'grtkqgluibsocdvaezjmhgfndx',
	'prlkqyluibsochvaezjmhgzndx',
	'prtkqylxibsocmvaezjmhgfkdx',
	'prtkqyluibsqctvaezjmpgfndx',
	'putkqyluibsocqvaezjmhgfndw',
	'prtjqyluibsiclvaezjmhgfndx',
	'prtkqylvpvsocwvaezjmhgfndx',
	'prnkqyluibsocwvaezjmhefsdx',
	'prtktyluibsocwvaezjkhgrndx',
	'prtkqyluibcovwvaezjthgfndx',
	'prtkqcluibiocwvaezjmhggndx',
	'prtkqyluihsocwveezjmhgfydx',
	'prtklyluibsocwqaszjmhgfndx',
	'prtkqyluibsocwvaezjmfznndx',
	'prtkjyluijsocwvaeejmhgfndx',
	'prtkqtluibsonwvaexjmhgfndx',
	'prtkqyluinsocwbaezjmjgfndx',
	'prtkqyluibslckvaezjmhgyndx',
	'prtkqyluibsodwlpezjmhgfndx',
	'prtkquluibsfcwvaezjhhgfndx',
	'prtkqyluhbsocweaezsmhgfndx',
	'prrkqyluinsocxvaezjmhgfndx',
	'prtkqyluibsoswvaezjmhgyqdx',
	'prtkqbluibdocwvlezjmhgfndx',
	'prtkqyfuibsocpvaezjmhgfnwx',
	'prtkqlluibsqjwvaezjmhgfndx',
	'prtkqyluibrocwvaehjmjgfndx',
	'prtkqyluibsoowvaezgmhgendx',
	'wrtjqyluibsocwvaezfmhgfndx',
	'prtvqyluhbsocwvaezjmtgfndx',
	'prtkqyllibspcwvaezjmkgfndx',
	'pqtzqyeuibsocwvaezjmhgfndx',
	'prtkqyluibsolpvaezjmegfndx',
	'przkayguibsocwvaezjmhgfndx',
	'prtkqyluidsocwvaezjmyufndx',
	'prtuqyluibsocwvaezjmfgfnkx',
	'prtkqwluibsrcwvaezjchgfndx',
	'prtkqyluibsotwhaozjmhgfndx',
	'erwkqylhibsocwvaezjmhgfndx',
	'prtkqyluibsocwvgezjmkgfedx',
	'prskqyluiesocwvaezjmggfndx',
	'prtkqylmitsocwvaezjmhgfnox',
	'prtkqyluinnocwvaezjmhgfkdx',
	'prtktyluibsokwvaezjmhgfcdx',
	'prtkqyluibsomwvakvjmhgfndx',
	'prtkqyltibloawvaezjmhgfndx',
	'prtkqyluibxocwvaezgmhgqndx',
	'prtkqyluibskcmvaezjmhgfngx',
	'artkqylubbsotwvaezjmhgfndx',
	'prtkqyluibzocwvhezjmhgfnbx',
	'prskqkluibsocwvaezjmhgfjdx',
	'prtkqyluibwocwvaezjkhglndx',
	'prukqyluissocwvzezjmhgfndx',
	'puhkqyluibsocwvaezjmhgfsdx',
	'qrtkqyluibsocwvaeujmhgfndd',
	'prtkqyluibsoctvaezjmagfnda',
	'prtkquluibsocwkaezjmhgfqdx',
	'prtkqyluubswcwvaezjmhvfndx',
	'prfkqyluibsocwvaemrmhgfndx',
	'pmtkqyluibpocwvaezjmhggndx',
	'prtkqvluibiocwvaezjqhgfndx',
	'prtkgypuibsocwvaezcmhgfndx',
	'prtpqyquibsovwvaezjmhgfndx',
	'prtwqyluiasocwvaexjmhgfndx',
	'mrtzqyluibbocwvaezjmhgfndx',
	'prtkqyluibsocwmaegwmhgfndx',
	'prtkqyluibvncwvaqzjmhgfndx',
	'prtkqyluiusocwvaezjmhmfbgx',
	'prtkqyljibvocwvaezjehgfndx',
	'prtkqyloibsopavaezjmhgfndx',
	'prckqyakibsocwvaezjmhgfndx',
	'prtkqyluibsdcwvaezjmngfddx',
	'prekqylupbsocwvaezemhgfndx',
	'hrtkqyluibhocwvaezjmhgfnde',
	'prmkqyluibsocwvaezzfhgfndx',
	'prtkqyluiccfcwvaezjmhgfndx',
	'pdtkqyluxbsocwvaezjmhgendx',
	'prokqyluibsocwvuezjmsgfndx',
	'prtkqyluibsacwvaezjyhgfndv',
	'prtkqmluibsocavaezjmhgfndc',
	'prtkqyluibsocwvmezjmhgtnqx',
	'prtkqytuibiocyvaezjmhgfndx',
	'pktkqyiuibsocwvwezjmhgfndx',
	'grtrqyluibsocwvaezjmhgfbdx',
	'prtkqylsibjocwvaezjmhgfnyx',
	'prtkqyhutbsocwvaexjmhgfndx',
	'prtknyluibsocmvaezumhgfndx',
	'prtkwyluibsocwvahzjmhgpndx',
	'prtkqywuibsolhvaezjmhgfndx',
	'prtkcyluibsoccvaezjthgfndx',
	'prtkqyrdibsocwvaezjbhgfndx',
	'prtkqyhuqbsocwvaezjmhgfxdx',
	'pytkqyluibsocwvagzjmhgfndv',
	'prtkqyliibsocwvaexwmhgfndx',
	'prtkqyluibshcwvaeljphgfndx',
	'prtkqyluibsocwvaerjzhbfndx',
	'prtkqyduibsocwvaezvmhgfnzx',
	'drtkqylhibsocwvaezjmhmfndx',
	'prtkqyluibsocwvaezamfvfndx',
	'brtkqyluqbsocwvaezjmhgpndx',
	'prtkqyiuibsocwvuezjmhgfngx',
	'urtkqyluibsocqvaeljmhgfndx',
	'prtkqyluikaocwvaezjmhgfjdx',
	'prqkqzouibsocwvaezjmhgfndx',
	'prtkqyluibsocxvaezjmhgfnxv',
	'prlkqyluibsoxwvaeijmhgfndx',
	'prthuyluibsocwvaezjmhgfnhx',
	'potkqyluizsocwvaezjmhifndx',
	'fstkqyduibsocwvaezjmhgfndx',
	'prtkqxluibsocwvaezjmhgffdm',
	'prtkqylpibsozwvaezmmhgfndx',
	'prxkqylbibsocwvaezjphgfndx',
	'srtkqyluibsicnvaezjmhgfndx',
	'prtktyluibsocwvaezjvhgfnax',
	'pctkqyluxbsocwvaezwmhgfndx',
	'prtkqylusbsoclvaezsmhgfndx',
	'pwtkqyluibsocrvaezjmggfndx',
	'prtkqyluibswcwraezjmhgfndd',
	'prtkqyluibtocwiaezjmhgfnax',
	'prtuqyluibsocwvajzjmngfndx',
	'pwtkqyluibsocwvaerjmogfndx',
	'petkqexuibsocwvaezjmhgfndx',
	'pztkqyluibsocwvaerqmhgfndx',
	'prtkqyluobsocwvaezjmapfndx',
	'prtkqyluiinocwvaeljmhgfndx',
	'prtkqyluibsoowvxezjmhgfnnx',
	'lrtkqyluibsocwvfezjmhgfndc',
	'prtkqyluibokcwvahzjmhgfndx',
	'prtkqmlufbsocwvaegjmhgfndx',
	'prtkqylribsocwvanzjmhgfnda',
	'prtkqyluibspxwvaezkmhgfndx',
	'prtiqyluibsbcwvaezjmhgfntx',
	'prikqzluinsocwvaezjmhgfndx',
	'prtkqnldibsocwvaezjmhxfndx',
	'prtkqyluixsocsvaezjmhwfndx',
	'hrtkqyluibsocwvaezjhhgfodx',
	'prtkqyluibsrcwvaezjmhpfwdx',
	'prtkqyluibsocwyaezjmhgffdk',
	'prtkqyluidsocwvalmjmhgfndx',
	'prukquluabsocwvaezjmhgfndx',
	'prckqyluinsmcwvaezjmhgfndx',
	'prbkqymuibsocwvaezjmhgfndc',
	'prtkfylaibsocwvaezjmkgfndx',
	'zrtkqyluibsocwvrbzjmhgfndx',
	'crtkqyluibsocwvaejjmkgfndx',
	'prttqyluibsocyvaezymhgfndx',
	'prtkqylugbsocwvaezjxhgfmdx',
	'prtkqyluibsocwdlezjmhgfnbx',
	'prtkqjluibsocwvaozjhhgfndx',
	'prtcjyluibsocwbaezjmhgfndx',
	'rrtkqyluiblocwvaezjmhgundx',
	'prtkkyluibsocwfaezjmhgfnyx',
	'prtkqyuuibsocwvaezjmhgfogx',
	'prtkyyluvbsocwvaezjmhgfnox',
	'prpkqyluibyocwvaezjmhggndx',
	'pdtkqyluibdocwvaezjmhgfndy',
	'prtklysuibsocwvaezjmhgfnwx',
	'prtkqyluabsouwvaekjmhgfndx',
	'phtkqyluibsocwvaezjmhgfnxt',
	'prtkqyxuibsocwvaezjmhpfnqx',
	'prtkqyluibsodwsaezdmhgfndx',
	'prtkbyluibsohwvaezjmhgfndr',
	'xrtkqylhibsocwvtezjmhgfndx',
	'prtkqyluvysocwvaezbmhgfndx',
	'prtkqieuibsocwvaeojmhgfndx',
	'pctkqyluibsocwvanzjmhgfnux',
	'vrtkqyluibsozwvaezjmhgandx',
	'prtkqyluiusocwvaezjmhmfngx',
	'prbkqyluibsockvaxzjmhgfndx',
	'prtkqyluibsonwvaczjmhgfndi',
	'prtkqyluiblocwvaezjmhgfnau',
	'prtkqyluibsocwvafzuchgfndx',
	'prdkqyluiysocwvaezjmhgfnax',
	'prnkqyouibsocwvaezjmhgfndq',
	'mrtkqgluibsocwvpezjmhgfndx',
	'pvtkqyluibsocwvaczjmhgnndx',
	'trtkqwluibsohwvaezjmhgfndx',
	'prmkqyluibsofwvaezjmhgfrdx',
	'prtyqyluibpdcwvaezjmhgfndx',
	'ertkqylulbsocwvaezjmhgfnax',
	'prtkqyluibsacwvaeijmhgfndf',
	'prtkqyluibyocwvapzjmhgpndx',
	'potkqyluibgocwvaezjmhzfndx',
	'prtkqyluibsocwyaezxmhgfnpx',
	'prtkqkjuibsncwvaezjmhgfndx',
	'prtqqyluibsocwlaezjmhgkndx',
	'prtkxyluibnocwvaezjmhgkndx',
	'prtkqyluiosocwvapzjmxgfndx',
	'prtkqylumbsocwvyezimhgfndx',
	'prukqyluibsocwvyezjmhgindx',
	'prtkqylbibstcwvaezjxhgfndx',
	'pctkqyuuibsocwvaezjuhgfndx',
	'vrtkqyluibsocwvaezjmhgfnll',
	'urtkqyluibsopwvaezjphgfndx',
	'prtkceluibsocwvaepjmhgfndx',
	'prwkxyluibsocwvaezjmhgfnzx',
	'prtkqyluitsocwvaezqzhgfndx',
	'prtkqkauibsorwvaezjmhgfndx',
	'prtkqyluibsocwvaezfmftfndx',
	'prtkiybuibsocwvaezjkhgfndx',
	'prtkzyluibsocwgaezjmvgfndx',
	'prtkqyluibsocwvaezjmhgqnxg',
	'prtkqyluimsocwvauzjwhgfndx',
	'prtkqyluibsacwgaezjmhgfndd',
	'pwtkuyluibsccwvaezjmhgfndx',
	'prtkqyluibsoawvaezjmvgfnlx',
	'prtkqyluabsocwwaezjmhgftdx',
	'patkqylnibsocwvaezjmhgfnox',
	'prtkqyluibsocwlaxzkmhgfndx',
	'pbtkqpluibsfcwvaezjmhgfndx',
	'prtkqyluibsoywsaezjmhgxndx',
	'prtkqyluibfocwvaezjyhgfhdx',
	'pltbqylcibsocwvaezjmhgfndx',
	'prtkdyluiisocwvvezjmhgfndx',
	'prtkqkxuibsokwvaezjmhgfndx',
	'prtkqyluibsoawvaezzmhgfndm',
	'petkqyluibsgcwvaezjmhgfndu',
	'prtkqyluibsoyxvaezjmlgfndx',
	'prtkqyluibxocwvaezgmhnfndx',
	'prtkikluibsocwvwezjmhgfndx',
	'prbkqyluibsocwvaezjhhgfnux',
	'prtkqylufbsxcwvaezjmhgfnfx',
	'prtkqyluibsdcdvaezjmhgxndx',
	'potkiyluibsocwvaezjmhkfndx',
	'prtkqyluiosocsvhezjmhgfndx',
	'prtkqyluibsocqbaezomhgfndx',
	'prtihyluibsocwvaeujmhgfndx',
	'prtuquruibsocwvaezjmhgfndx',
	'prtkqyloibsocwvaeztmhifndx',
	'ertuqyluibsocwvaeajmhgfndx'
)