    var toggls = $(".toggle");
    var arr = [...toggls];

    arr.forEach((element, index) => {
      element.addEventListener("click", () => {
        element.style.opacity = "1";
        if (index == 0) {
          $('main').removeClass('bg-ormain bg-prlmain').addClass('bg-blmain');
          $('#screen').removeClass('bg-orscreen border-orscreen bg-prlscreen border-prlscreen').addClass('bg-blscreen border-blscreen');
          $('.key').removeClass('boxw_two boxw_three').addClass('boxWhite');
          $('.der').removeClass('boxb_two boxb_three').addClass('boxBlue');
          $('#equal').removeClass('boxr_two boxr_three').addClass('boxRed');
          $('.keytog').removeClass('border-ortoggle bg-ortoggle border-prltoggle bg-prltoggle').addClass('border-bltoggle bg-bltoggle');
          $('.font-bold').removeClass('text-ortext text-prltext').addClass('text-white');
          $('.toggle').removeClass('bg-orred bg-prlred').addClass('bg-blred');
          localStorage.theme = 'dark';
        } else if (index == 1) {
          $('main').removeClass('bg-blmain bg-prlmain').addClass('bg-ormain');
          $('#screen').removeClass('bg-blscreen border-blscreen bg-prlscreen border-prlscreen').addClass('bg-orscreen border-orscreen');
          $('.key').removeClass('boxWhite boxw_three').addClass('boxw_two');
          $('.der').removeClass('boxBlue boxb_three').addClass('boxb_two');
          $('#equal').removeClass('boxRed boxr_three').addClass('boxr_two');
          $('.keytog').removeClass('border-bltoggle bg-bltoggle border-prltoggle bg-prltoggle').addClass('border-ortoggle bg-ortoggle');
          $('.font-bold').removeClass('text-white text-prltext').addClass('text-ortext');
          $('.toggle').removeClass('bg-blred bg-prlred').addClass('bg-orred');
          localStorage.theme = 'light';
        } else {
          $('main').removeClass('bg-blmain bg-ormain').addClass('bg-prlmain');
          $('#screen').removeClass('bg-blscreen border-blscreen bg-orscreen border-orscreen').addClass('bg-prlscreen border-prlscreen');
          $('.key').removeClass('boxWhite boxw_two').addClass('boxw_three');
          $('.der').removeClass('boxBlue boxb_two').addClass('boxb_three');
          $('#equal').removeClass('boxRed boxr_two').addClass('boxr_three');
          $('.keytog').removeClass('border-bltoggle bg-bltoggle border-ortoggle bg-ortoggle').addClass('border-prltoggle bg-prltoggle');
          $('.font-bold').removeClass('text-white text-ortext').addClass('text-prltext');
          $('.toggle').removeClass('bg-blred bg-orred').addClass('bg-prlred');
          localStorage.theme = 'another';
        }
        arr
          .filter(function (item) {
            return item != element;
          })
          .forEach((item) => {
            item.style.opacity = "0";
          });
      });
    });

    //localstorage toggle
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      $('main').removeClass('bg-ormain bg-prlmain').addClass('bg-blmain');
      $('#screen').removeClass('bg-orscreen border-orscreen bg-prlscreen border-prlscreen').addClass('bg-blscreen border-blscreen');
      $('.key').removeClass('boxw_two boxw_three').addClass('boxWhite');
      $('.der').removeClass('boxb_two boxb_three').addClass('boxBlue');
      $('#equal').removeClass('boxr_two boxr_three').addClass('boxRed');
      $('.keytog').removeClass('border-ortoggle bg-ortoggle border-prltoggle bg-prltoggle').addClass('border-bltoggle bg-bltoggle');
      $('.font-bold').removeClass('text-ortext text-prltext').addClass('text-white');
      $('.toggle').removeClass('bg-orred bg-prlred').addClass('bg-blred');
      $('#two, #three').removeClass('opacity-100');
      $('#one').addClass('opacity-100');
    } else if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      $('main').removeClass('bg-blmain bg-prlmain').addClass('bg-ormain');
      $('#screen').removeClass('bg-blscreen border-blscreen bg-prlscreen border-prlscreen').addClass('bg-orscreen border-orscreen');
      $('.key').removeClass('boxWhite boxw_three').addClass('boxw_two');
      $('.der').removeClass('boxBlue boxb_three').addClass('boxb_two');
      $('#equal').removeClass('boxRed boxr_three').addClass('boxr_two');
      $('.keytog').removeClass('border-bltoggle bg-bltoggle border-prltoggle bg-prltoggle').addClass('border-ortoggle bg-ortoggle');
      $('.font-bold').removeClass('text-white text-prltext').addClass('text-ortext');
      $('.toggle').removeClass('bg-blred bg-prlred').addClass('bg-orred');
      $('#one, #three').removeClass('opacity-100');
      $('#two').addClass('opacity-100');
    } else {
      $('main').removeClass('bg-blmain bg-ormain').addClass('bg-prlmain');
      $('#screen').removeClass('bg-blscreen border-blscreen bg-orscreen border-orscreen').addClass('bg-prlscreen border-prlscreen');
      $('.key').removeClass('boxWhite boxw_two').addClass('boxw_three');
      $('.der').removeClass('boxBlue boxb_two').addClass('boxb_three');
      $('#equal').removeClass('boxRed boxr_two').addClass('boxr_three');
      $('.keytog').removeClass('border-bltoggle bg-bltoggle border-ortoggle bg-ortoggle').addClass('border-prltoggle bg-prltoggle');
      $('.font-bold').removeClass('text-white text-ortext').addClass('text-prltext');
      $('.toggle').removeClass('bg-blred bg-orred').addClass('bg-prlred');
      $('#two, #one').removeClass('opacity-100');
      $('#three').addClass('opacity-100');
    }


    // const screen = document.querySelector('#screen')
    //update screen
    const updateScreen = (number)=>{
      $('#screen').val(number);
    }

    $('.number').click(function(){
          inputNumber($(this).val());
          updateScreen(currentNumber);
    });

    let prevNumber = ''
    let calculationOperator =''
    let currentNumber ='0'

    //first number
    const inputNumber = (number)=>{
        if(currentNumber === '0'){
            currentNumber = number
        }else{
            currentNumber += number
        }
    }

    $('.operator').click(function(){
      inputOperator($(this).val());
    });

    const inputOperator = (operator)=>{
        if (calculationOperator === ''){
            prevNumber = currentNumber
        }
        calculationOperator = operator
        currentNumber = ''
    }

    $('#equal').click(function(){
      calculate();
      updateScreen(currentNumber);
    });

    const calculate = () =>{
        let result = ''
        switch(calculationOperator){
            case "+":
                result = parseFloat(prevNumber) + parseFloat(currentNumber)
                break
            case "-":
                result = parseFloat(prevNumber) - parseFloat(currentNumber)
                break
            case "*":
                result = parseFloat(prevNumber) * parseFloat(currentNumber)
                break
            case "/":
                result = parseFloat(prevNumber) / parseFloat(currentNumber)
                break
            default:
                return
        }
        currentNumber = result
        calculationOperator = ''
    }

    const clearAll = () =>{
        prevNumber =''
        calculationOperator =''
        currentNumber ='0'
    }

    $('#reset').click(function(){
      clearAll();
      updateScreen(currentNumber);
    });

    inputDecimal = (dot) => {
        if(currentNumber.includes('.')){
            return
        }
        currentNumber += dot
    }

    $("#decimal").click(function(){
      inputDecimal($(this).val());
      updateScreen(currentNumber);
    })

    $('#del').click(function(){
        if(($('#screen').val().length) == 1){
          currentNumber ='0'
          updateScreen(currentNumber);
        }else{
          currentNumber = $('#screen').val().substring(0, $('#screen').val().length - 1);
          updateScreen(currentNumber);
        }
    });
