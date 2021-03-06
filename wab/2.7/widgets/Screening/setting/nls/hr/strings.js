///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "feetUnit": "Stope / Kvadratne stope",
    "milesUnit": "Milje / Rali",
    "metersUnit": "Metri / Kvadratni metri",
    "kilometersUnit": "Kilometri / Kvadratni kilometri",
    "hectaresUnit": "Kilometri / Hektari"
  },
  "analysisTab": {
    "analysisTabLabel": "Analiza",
    "selectAnalysisLayerLabel": "Odaberite slojeve za analizu",
    "addLayerLabel": "Dodaj slojeve",
    "noValidLayersForAnalysis": "Nema valjanih slojeva na odabranoj web karti.",
    "noValidFieldsForAnalysis": "Nema valjanih polja na odabranoj web karti. Uklonite odabrani sloj.",
    "addLayersHintText": "Savjet: odabrani slojevi i polja za analizu i prikaz u izvješću",
    "addLayerNameTitle": "Naziv sloja",
    "addFieldsLabel": "Dodaj polje",
    "addFieldsPopupTitle": "Odaberi polja",
    "addFieldsNameTitle": "Nazivi polja",
    "aoiToolsLegendLabel": "AOI alati",
    "aoiToolsDescriptionLabel": "Omogućite alate za stvaranje područja interesa i navedite njihove oznake",
    "placenameLabel": "Naziv mjesta",
    "drawToolsLabel": "Alati za crtanje",
    "uploadShapeFileLabel": "Učitavanje shapefilea",
    "coordinatesLabel": "Koordinate",
    "coordinatesDrpDwnHintText": "Savjet: odaberite jedinicu za prikaz unesenih prijelaza",
    "coordinatesBearingDrpDwnHintText": "Savjet: odaberite azimut za prikaz unesenih prijelaza",
    "allowShapefilesUploadLabel": "Omogućite učitavanje shapefileova za analizu",
    "allowShapefilesUploadLabelHintText": "Savjet: prikažite „učitaj shapefile u analizi” u kartici izvješća",
    "allowVisibleLayerAnalysisLabel": "Nemojte analizirati ili izvještavati rezultate za slojeve koji nisu vidljivi",
    "allowVisibleLayerAnalysisHintText": "Podsjetnik: slojevi koji su isključeni ili nisu vidljivi zbog postavki vidljivosti mjerila neće se analizirati ili neće biti uključeni u ispisane ili preuzete rezultate.",
    "areaUnitsLabel": "Prikaži rezultate analize u",
    "maxFeatureForAnalysisLabel": "Maks. geoobjekata za analizu",
    "maxFeatureForAnalysisHintText": "Savjet: postavite maksimalni broj geoobjekata za analizu",
    "searchToleranceLabelText": "Pretraži odstupanje",
    "searchToleranceHint": "Savjet: pretraživanje odstupanja upotrebljava se samo kada se analiziraju unosi linija i točaka",
    "placenameButtonText": "Naziv mjesta",
    "drawToolsButtonText": "Crtaj",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Koordinate",
    "invalidLayerErrorMsg": "Konfigurirajte polja za"
  },
  "downloadTab": {
    "downloadLegend": "Postavke preuzimanja",
    "reportLegend": "Postavke izvješća",
    "downloadTabLabel": "Preuzmi",
    "syncEnableOptionLabel": "Slojevi geoobjekta",
    "syncEnableOptionHint": "Savjet: upotrebljava se za preuzimanje informacija o geoobjektima za geoobjekte koji presijecaju područje u označenim formatima.",
    "syncEnableOptionNote": "Napomena: usluge geoobjekata s omogućenim sinkroniziranjem potrebne su za geobazu podataka.",
    "extractDataTaskOptionLabel": "Usluga geoprocesiranja Izdvoji podatke zadatka",
    "extractDataTaskOptionHint": "Savjet: upotrijebite objavljenu uslugu geoprocesiranja Izdvoji podatke zadatka za preuzimanje geoobjekata koji se presijecaju s područjima u geobazi podataka ili formatima shapefileova.",
    "cannotDownloadOptionLabel": "Onemogući preuzimanje",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Naziv sloja",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Geobaza podataka",
      "allowDownloadLabel": "Omogući preuzimanje"
    },
    "setButtonLabel": "Postavi",
    "GPTaskLabel": "Navedite url za uslugu geoprocesiranja",
    "printGPServiceLabel": "URL usluge ispisa",
    "setGPTaskTitle": "Navedite traženi URL usluge geoprocesiranja",
    "logoLabel": "Logotip",
    "logoChooserHint": "Savjet: kliknite na ikonu slike za promjenu slike",
    "footnoteLabel": "Fusnota",
    "columnTitleColorPickerLabel": "Boja za nazive stupaca",
    "reportTitleLabel": "Naziv izvješća",
    "errorMessages": {
      "invalidGPTaskURL": "Nevažeća usluga geoprocesiranja. Odaberite uslugu geoprocesiranja koja sadrži zadatak izdvajanja podataka.",
      "noExtractDataTaskURL": "Odaberite bilo koju uslugu geoprocesiranja koja sadrži zadatak izdvajanja podataka."
    }
  },
  "generalTab": {
    "generalTabLabel": "Općenito",
    "tabLabelsLegend": "Oznake ploče",
    "tabLabelsHint": "Savjet: navedite oznake",
    "AOITabLabel": "Ploča područja interesa",
    "ReportTabLabel": "Ploča izvješća",
    "bufferSettingsLegend": "Postavke pojasa",
    "defaultBufferDistanceLabel": "Zadana veličina pojasa",
    "defaultBufferUnitsLabel": "Jedinice pojasa",
    "generalBufferSymbologyHint": "Savjet: postavite simbologiju koja će se koristiti za prikaz pojaseva oko određenih područja interesa",
    "aoiGraphicsSymbologyLegend": "Simbologija AOI Graphics",
    "aoiGraphicsSymbologyHint": "Savjet: postavite simbologiju koja će se koristiti s određenim točkastim, linijskim i poligonalnim područjima interesa",
    "pointSymbologyLabel": "Točka",
    "previewLabel": "Pretpregled",
    "lineSymbologyLabel": "Linija",
    "polygonSymbologyLabel": "Poligon",
    "aoiBufferSymbologyLabel": "Simbologija pojasa",
    "pointSymbolChooserPopupTitle": "Simbol adrese ili lokacije",
    "polygonSymbolChooserPopupTitle": "Odaberi simbol za isticanje poligona",
    "lineSymbolChooserPopupTitle": "Odaberi simbol za isticanje linije",
    "aoiSymbolChooserPopupTitle": "Postavi simbol pojasa",
    "aoiTabText": "AOI",
    "reportTabText": "Izvješće",
    "invalidSymbolValue": "Nevažeća vrijednost simbola."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Postavke izvora pretraživanja",
    "searchSourceSettingTitle": "Postavke izvora pretraživanja",
    "searchSourceSettingTitleHintText": "Dodajte i konfigurirajte usluge geokodiranja ili slojeve s geoobjektima kao izvorima pretraživanja. Ti određeni izvori određuju što se može pretražiti u okviru za pretraživanje",
    "addSearchSourceLabel": "Dodaj izvor pretraživanja",
    "featureLayerLabel": "Sloj geoobjekta",
    "geocoderLabel": "Geokoder",
    "generalSettingLabel": "Opće postavke",
    "allPlaceholderLabel": "Mjesto za unos teksta za pretraživanje svega:",
    "allPlaceholderHintText": "Savjet: unesite tekst koji će se prikazati kao mjesto za unos prilikom pretraživanja svih slojeva i geokodera",
    "generalSettingCheckboxLabel": "Prikaži skočni prozor za pronađeni geoobjekt ili lokaciju",
    "countryCode": "Pozivni broj za državu ili regiju",
    "countryCodeEg": "npr. ",
    "countryCodeHint": "Ako ostavite ovu vrijednost praznom, pretražit će se sve države i regije",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Pretraži samo trenutačni obuhvat karte",
    "zoomScale": "Mjerilo uvećanja",
    "locatorUrl": "URL geokodera",
    "locatorName": "Naziv geokodera",
    "locatorExample": "Primjer",
    "locatorWarning": "Ova verzija usluge geokodiranja nije podržana. Widget podržava verziju usluge geokodiranja 10.0 i novije verzije.",
    "locatorTips": "Prijedlozi nisu dostupni jer usluga geokodiranja ne podržava mogućnost predlaganja.",
    "layerSource": "Izvor sloja",
    "setLayerSource": "Postavi izvor sloja",
    "setGeocoderURL": "Postavi URL geokodera",
    "searchLayerTips": "Prijedlozi nisu dostupni jer usluga geoobjekata ne podržava mogućnost numeriranja stranica.",
    "placeholder": "Mjesto za unos teksta",
    "searchFields": "Polja za pretraživanje",
    "displayField": "Polja za prikaz",
    "exactMatch": "Točno podudaranje",
    "maxSuggestions": "Maksimalni broj prijedloga",
    "maxResults": "Maksimalni rezultati",
    "enableLocalSearch": "Omogući lokalno pretraživanje",
    "minScale": "Min. mjerilo",
    "minScaleHint": "Kad je mjerilo karte veće od ovog mjerila, primijenit će se lokalno pretraživanje",
    "radius": "Polumjer",
    "radiusHint": "Određuje polumjer područja oko trenutačnog središta karte koje se upotrebljava za povećanje broja kandidata za geokodiranje kako bi se prvi prikazali kandidati koji su najbliži lokaciji",
    "setSearchFields": "Postavi polja za pretraživanje",
    "set": "Postavi",
    "invalidUrlTip": "URL ${URL} nije valjan ili dostupan.",
    "invalidSearchSources": "Nevažeće postavke pretraživanja izvora"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Popunite tražena polja",
    "bufferDistanceFieldsErrorMsg": "Unesite valjane vrijednosti",
    "invalidSearchToleranceErrorMsg": "Unesite valjanu vrijednost za odstupanje pretraživanja",
    "atLeastOneCheckboxCheckedErrorMsg": "Nevažeća konfiguracija: potreban je barem jedan AOI alat.",
    "noLayerAvailableErrorMsg": "Nema dostupnih slojeva",
    "layerNotSupportedErrorMsg": "Nije podržano ",
    "noFieldSelected": "Upotrijebite radnju uređivanja za odabir polja za analizu.",
    "duplicateFieldsLabels": "Duplicirajte oznaku „${labelText}” dodanu za: „${itemNames}”",
    "noLayerSelected": "Odaberite barem jedan sloj za analizu",
    "errorInSelectingLayer": "Nije moguće dovršiti radnju odabranog sloja. Pokušajte ponovo.",
    "errorInMaxFeatureCount": "Unesite valjani maks. broj geoobjekata za analizu."
  }
});