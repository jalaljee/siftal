// on start
function pushStateSiftal(_direct)
{
  // run modal
  modalOpenClose();
  runDataResponse();
  runInputFileFunc();
  responsiveSidebar();
  // setLanguageURL(_direct);
  runSortable();
  // run clockpickers
  runClockPicker();
  // run counter up on each page we have counter
  runCounterUp();
  // run notif from html
  runHtmlNotif();
  // run datepicker
  runDatePicker();
  // check here links
  weAreHereChecker();
  // run cleave
  cleaveRunner();
  // detect id and try to scroll to it
  scrollSmoothDetector(_direct);
  // run watchScroll func to watch all elements
  watchScroll();
  // run form tools
  formToolsRunner();
  runTippy();
  initTagDetector();
  bindUploader();
  dropdownRunner();
  // check navigate is done or not
  navigateChecker();
  // check autoPrint detection
  autoPrint();
  // run runner
  dataRunner();
  // run kerkere
  kerkereRunner();
  // run dataCopy
  dataCopy();

  if($('body').attr('data-in') === 'enter')
  {
    // run on enter
    handleEnterEvents();
  }

  if($('body').attr('data-in') === 'pay')
  {
    // run on enter
    handlePayEvents();
  }

  if($('body').hasClass('siftal'))
  {
    // run on siftal admin panel

  }
  callFunc('pushState', _direct);
  callFunc('pushStateFinal', _direct);
  callFunc('chartDrawer', _direct);
  callFunc('pushStateGA', _direct);
}


// run for the first time
$(document).ready(function()
{
  pushStateSiftal(true);

  // call some static function without need to run with pushState
  inputChecker();
  // check requirements of form and highlight them
  inputRequirement();
  // do something before unload page
  catchBeforeUnload();
  // openable table
  tbl1Openable();
  // remove noscript tag
  noscriptRemover();
  // run cloner
  cloner();
  pingiRunner();
  // try to register service worker
  registerServiceWorker();

  if($('body').hasClass('siftal'))
  {
    // bind userprofile to show detail
    showUserProfile();
    // check for new smile
    checkSmile(true);
  }

});



function beforePushStateSiftal()
{
  callFunc('removeAmcharts4');

}

