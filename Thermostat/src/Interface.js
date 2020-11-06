$(document).ready(function() {
  var thermostat = new Thermostat();
  console.log(thermostat)
  updateTemp();

  $('.temp-up').on('click', function() {
    thermostat.up();
    updateTemp();
  });

  $('.temp-down').on('click', function() {
    thermostat.down();
    updateTemp();
  });


  $('.reset').on('click', function() {
    thermostat.resetTemp();
    updateTemp();
  });

  $('.save-mode-on').on('click', function() {
    thermostat.powerSavingModeOn();
    $('.power-mode').text('on');
    updateTemp();
  });

  $('.save-mode-off').on('click', function() {
    thermostat.powerSavingModeOff();
    $('.power-mode').text('off');
    updateTemp();
  });

  // $('').('', function() {
  //
  // })

  function updateTemp() {
    $('.temperature').text(`Temperature: ${thermostat.temperature()}`);
    $('.uage-colour').attr('class', thermostat.energyUsage());
  }
})
