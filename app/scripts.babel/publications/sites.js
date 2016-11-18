const badSites = [{
  url: createRegex('thebostontribune.com'),
  types: [1]
},{
  url: createRegex('associatedmediacoverage.com'),
  types: [1]
},{
  url: createRegex('100percentFedup.com'),
  types: [2,3]
},{
  url: createRegex('21stCenturyWire.com'),
  types: [2,3]
},{
  url: createRegex('70news.wordpress.com'),
  types: [1]
},{
  url: createRegex('abcnews.com.co'),
  types: [1]
},{
  url: createRegex('activistpost.com'),
  types: [2,3]
},{
  url: createRegex('addictinginfo.org'),
  types: [3]
},{
  url: createRegex('americannewsx.com'),
  types: [1]
},{
  url: createRegex('americannews.com'),
  types: [1]
},{
  url: createRegex('anonnews.co'),
  types: [3]
},{
  url: createRegex('BeforeItsNews.com'),
  types: [1]
},{
  url: createRegex('BigAmericanNews.com'),
  types: [1]
},{
  url: createRegex('BigPZone.com'),
  types: [2,3]
},{
  url: createRegex('bipartisanreport.com'),
  types: [3]
},{
  url: createRegex('bizpacreview.com'),
  types: [2,3]
},{
  url: createRegex('bluenationreview.com'),
  types: [2,3]
},{
  url: createRegex('breitbart.com'),
  types: [2,3]
},{
  url: createRegex('cap-news.com'),
  types: [4]
},{
  url: createRegex('christwire.org'),
  types: [4]
},{
  url: createRegex('enduringvision.com'),
  types: [1]
},{
  url: createRegex('FPRNradio.com'),
  types: [1,2]
},{
  url: createRegex('thefreethoughtproject.com'),
  types: [3]
},{
  url: createRegex('geoengineeringwatch.com'),
  types: [1,2]
},{
  url: createRegex('globalresearch.ca'),
  types: [2,3]
},{
  url: createRegex('govtslaves.info'),
  types: [1,2]
},{
  url: createRegex('gulagbound.com'),
  types: [1,2]
},{
  url: createRegex('hangthebankers.com'),
  types: [1,2]
},{
  url: createRegex('humansarefree.com'),
  types: [1,2]
},{
  url: createRegex('ifyouonlynews.com'),
  types: [2]
},{
  url: createRegex('ijr.com'),
  types: [2,3]
},{
  url: createRegex('infowars.com'),
  types: [1,2]
},{
  url: createRegex('intellihub.com'),
  types: [2,3]
},{
  url: createRegex('inquisitr.com'),
  types: [2,3]
},{
  url: createRegex('jonesreport.com'),
  types: [1,2]
},{
  url: createRegex('lewrockwell.com'),
  types: [2,3]
},{
  url: createRegex('pakalertpress.com'),
  types: [1,2]
},{
  url: createRegex('politicalblindspot.com'),
  types: [2,3]
},{
  url: createRegex('politicalears.com'),
  types: [1,2]
},{
  url: createRegex('politicalo.com'),
  types: [1]
},{
  url: createRegex('politicususa.com'),
  types: [2,3]
},{
  url: createRegex('prisonplanet.com'),
  types: [2,3]
},{
  url: createRegex('private-eye.co.uk'),
  types: [4]
},{
  url: createRegex('projectveritas.com'),
  types: [1,2]
},{
  url: createRegex('react365.com'),
  types: [1]
},{
  url: createRegex('RealFarmacy.com'),
  types: [1,2]
},{
  url: createRegex('RealNewsRightNow.com'),
  types: [1,4]
},{
  url: createRegex('RedFlagNews.com'),
  types: [2,3]
},{
  url: createRegex('redstate.com'),
  types: [3]
},{
  url: createRegex('reductress.com'),
  types: [4]
},{
  url: createRegex('rilenews.com'),
  types: [1,4]
},{
  url: createRegex('satiratribune.com'),
  types: [4]
},{
  url: createRegex('sprotspickle.com'),
  types: [4]
},{
  url: createRegex('theblaze.com'),
  types: [3]
},{
  url: createRegex('chronicle.su'),
  types: [1]
},{
  url: createRegex('civictribune.com'),
  types: [1]
},{
  url: createRegex('clickhole.com'),
  types: [4]
},{
  url: createRegex('clckhl.co'),
  types: [4]
},{
  url: createRegex('coasttocoastam.com'),
  types: [2]
},{
  url: createRegex('collective-evolution.com'),
  types: [3]
},{
  url: createRegex('consciouslifenews.com'),
  types: [2]
},{
  url: createRegex('conservativeoutfitters.com'),
  types: [2]
},{
  url: createRegex('wideawakeamerica.com'),
  types: [2]
},{
  url: createRegex('countdowntozerotime.com'),
  types: [2]
},{
  url: createRegex('counterpsyops.com'),
  types: [1]
},{
  url: createRegex('creambmp.com'),
  types: [1]
},{
  url: createRegex('dailybuzzlive.com'),
  types: [1,2,3]
},{
  url: createRegex('dailycurrant.com'),
  types: [1,4]
},{
  url: createRegex('dailynewsbin.com'),
  types: [3]
},{
  url: createRegex('DCClothesLine.com'),
  types: [3]
},{
  url: createRegex('DCGazette.com'),
  types: [1]
},{
  url: createRegex('DenverGuardian.com'),
  types: [1]
},{
  url: createRegex('derfmagazine.com'),
  types: [1,4]
},{
  url: createRegex('disclose.tv'),
  types: [1]
},{
  url: createRegex('DrudgeReport.com.co'),
  types: [1]
},{
  url: createRegex('duffleblog.com'),
  types: [4]
},{
  url: createRegex('duhprogressive.com'),
  types: [4]
},{
  url: createRegex('embols.com'),
  types: [1]
},{
  url: createRegex('empireherald.com'),
  types: [1,2,3]
},{
  url: createRegex('empirenews.com'),
  types: [1]
},{
  url: createRegex('endingthefed.com'),
  types: [1,2]
},{
  url: createRegex('libertytalk.fm'),
  types: [2]
},{
  url: createRegex('libertyunyielding.com'),
  types: [2]
},{
  url: createRegex('libertyvideos.org'),
  types: [1]
},{
  url: createRegex('mediamass.net'),
  types: [1]
},{
  url: createRegex('megynkelly.us'),
  types: [1]
},{
  url: createRegex('MSNBC.com.co'),
  types: [1]
},{
  url: createRegex('MSNBC.website'),
  types: [1]
},{
  url: createRegex('Naha Daily'),
  types: [4]
},{
  url: createRegex('NationalReport.net'),
  types: [1]
},{
  url: createRegex('NaturalNews.com'),
  types: [1,2]
},{
  url: createRegex('ncscooper.com'),
  types: [1,4]
},{
  url: createRegex('newcenturytimes.com'),
  types: [2,3]
},{
  url: createRegex('newsbiscuit.com'),
  types: [1]
},{
  url: createRegex('newslo.com'),
  types: [1,4]
},{
  url: createRegex('NewsMutiny.com'),
  types: [1,4]
},{
  url: createRegex('NewsWire-24.com'),
  types: [1,2]
},{
  url: createRegex('NoDisInfo.com'),
  types: [1,2]
},{
  url: createRegex('now8news.com'),
  types: [1,4]
},{
  url: createRegex('NowTheEndBegins.com'),
  types: [1,2]
},{
  url: createRegex('occupydemocrats.com'),
  types: [3]
},{
  url: createRegex('thefreethoughtproject.com'),
  types: [3]
},{
  url: createRegex('newyorker.com\\/humor\\/borowitz-report'),
  types: [4]
},{
  url: createRegex('theonion.com'),
  types: [4]
},{
  url: createRegex('other98.com'),
  types: [3]
},{
  url: createRegex('thedailysheeple.com'),
  types: [2,3]
},{
  url: createRegex('thenewsnerd.com'),
  types: [1,4]
},{
  url: createRegex('therundownlive.com'),
  types: [1,2]
},{
  url: createRegex('theuspatriot.com'),
  types: [1,2,3]
},{
  url: createRegex('truthfrequencyradio.com'),
  types: [1]
},{
  url: createRegex('twitchy.com'),
  types: [3]
},{
  url: createRegex('unconfirmedsources.com'),
  types: [1,4]
},{
  url: createRegex('usasupreme.com'),
  types: [1,2]
},{
  url: createRegex('us.blastingnews.com'),
  types: [2]
},{
  url: createRegex('usuncut.com'),
  types: [3]
},{
  url: createRegex('veteranstoday.com'),
  types: [1,2]
},{
  url: createRegex('WitScience.org'),
  types: [1,3,4]
},{
  url: createRegex('wnd.com'),
  types: [1,2]
},{
  url: createRegex('worldnewsdailyreport.com'),
  types: [4]
},{
  url: createRegex('WorldTruth.tv'),
  types: [1,2]
},{
  url: createRegex('zerohedge.com'),
  types: [2,3]
},{
  url: createRegex('winningdemocrats.com'),
  types: [1,3]
}];

function createRegex(url) {
  const escapedUrl = url.replace('.','\\.');
  const regexString = `^((http|https):\\/\\/l\\.facebook\\.com\\/l\\.php\\?u=(http|https)%3A%2F%2F(www\\.)?${encodeURIComponent(url)}|(http|https):\\/\\/(www\\.)?${escapedUrl})`;
  return new RegExp(regexString, 'i');
}

export default badSites;
