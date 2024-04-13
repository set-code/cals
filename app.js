
	
	function initApp() {
        console.log("App initialized!");
        // $('head').append('<link rel="stylesheet" type="text/css" href="calc.css">');

        // calc.css
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'calc.css';
        document.getElementsByTagName('head')[0].appendChild(link);

        $('#calculate').click(function() {
            var houseType = $('#houseType').val();
            var roofType = $('#roofType').val();
            var floorsCount = $('#floorsCount').val();
            var gutterSystem = $('#gutterSystem').prop('checked') ? $('#gutterSystem').val() : 0;
            var septic = $('#septic').prop('checked') ? $('#septic').val() : 0;
            var sewerage = $('#sewerage').prop('checked') ? $('#sewerage').val() : 0;
            var width = $('#width').val();
            var length = $('#length').val();
            var height = $('#height').val();
            var windowCount = $('#windowCount').val();
            var windowPrice = $('#windowPrice').val();
            var doorCount = $('#doorCount').val();
            var doorPrice = $('#doorPrice').val();

            var volume = width * length * height * floorsCount;
            var baseCost = volume * houseType;
            var roofCost = width * length * roofType;
            var windowCost = windowCount * windowPrice;
            var doorCost = doorCount * doorPrice;

            var totalCost = baseCost + roofCost + windowCost + doorCost + parseInt(gutterSystem) + parseInt(septic) + parseInt(sewerage);

            $('#cost').text(totalCost);
        });
    }