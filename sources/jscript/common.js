(function() {
  var first_ans_yes = document.querySelector('#first_ans_yes');
  var first_ans_no = document.querySelector('#first_ans_no');
  var no_ans_yes = document.querySelector('#no_ans_yes');
  var no_ans_no = document.querySelector('#no_ans_no');
  var yes_ans_yes = document.querySelector('#yes_ans_yes');
  var yes_ans_no = document.querySelector('#yes_ans_no');

  var question_no = document.querySelector('.algorithm__question--no');
  var question_yes = document.querySelector('.algorithm__question--yes');
  var second_step = document.querySelector('#second_step');

  var hints = document.querySelector('#hints');
  var float = document.querySelector('#float');
  var inline_block = document.querySelector('#inline-block');

  var reset = document.querySelector('#reset');

  var seconds = [no_ans_yes, no_ans_no, yes_ans_yes, yes_ans_no];
  var all_btn = [first_ans_yes, first_ans_no, no_ans_yes, no_ans_no, yes_ans_yes, yes_ans_no];
  var all_blocks = [question_no, question_yes];
  var all_hints = [hints, float, inline_block];

  first_ans_yes.addEventListener('click', function() {
    event.preventDefault();

    first_ans_yes.classList.add('algorithm__answer--answered');
    first_ans_yes.classList.add('algorithm__answer--answered--active');
    fadeIn(first_ans_yes);

    first_ans_no.classList.add('algorithm__answer--answered--inactive');

    second_step.classList.add('algorithm__second-step--active');
    question_yes.classList.add('algorithm__question--active');
    question_yes.classList.remove('algorithm__question--inactive');
    fadeIn(question_yes);
    question_no.classList.remove('algorithm__question--active');
    question_no.classList.add('algorithm__question--inactive');

    hints.classList.remove('hints--show');

    for (var i = 0; i < seconds.length; i++) {
      seconds[i].classList.remove('algorithm__answer--answered');
      seconds[i].classList.remove('algorithm__answer--answered--active');
      seconds[i].classList.remove('algorithm__answer--answered--inactive');
    };

  });

  first_ans_no.addEventListener('click', function() {
    event.preventDefault();

    first_ans_no.classList.add('algorithm__answer--answered');
    first_ans_no.classList.add('algorithm__answer--answered--active');
    fadeIn(first_ans_no);

    first_ans_yes.classList.add('algorithm__answer--answered--inactive');

    second_step.classList.add('algorithm__second-step--active');
    question_no.classList.add('algorithm__question--active');
    question_no.classList.remove('algorithm__question--inactive');
    fadeIn(question_no);
    question_yes.classList.remove('algorithm__question--active');
    question_yes.classList.add('algorithm__question--inactive');

    hints.classList.remove('hints--show');

    for (var i = 0; i < seconds.length; i++) {
      seconds[i].classList.remove('algorithm__answer--answered');
    };
  });

  no_ans_yes.addEventListener('click', function() {
    event.preventDefault();

    no_ans_yes.classList.add('algorithm__answer--answered');
    no_ans_yes.classList.add('algorithm__answer--answered--active');
    fadeIn(no_ans_yes);

    no_ans_no.classList.add('algorithm__answer--answered--inactive');

    hints.classList.add('hints--show');
    float.classList.add('hints__option--active');
    float.classList.remove('hints__option--inactive');
    fadeIn(float);
    fadeIn(reset);
    inline_block.classList.remove('hints__option--active');
    inline_block.classList.add('hints__option--inactive');

    first_ans_no.classList.add('algorithm__answer--answered--active');
    first_ans_yes.classList.remove('algorithm__answer--answered--active');

    var other_option = [yes_ans_yes, yes_ans_no];

    for (var i = 0; i < other_option.length; i++) {
      other_option[i].classList.remove('algorithm__answer--answered');
    }
  });

  no_ans_no.addEventListener('click', function() {
    event.preventDefault();

    no_ans_no.classList.add('algorithm__answer--answered');
    no_ans_no.classList.add('algorithm__answer--answered--active');
    fadeIn(no_ans_no);

    no_ans_yes.classList.add('algorithm__answer--answered--inactive');

    hints.classList.add('hints--show');
    inline_block.classList.add('hints__option--active');
    inline_block.classList.remove('hints__option--inactive');
    fadeIn(inline_block);
    fadeIn(reset);
    float.classList.remove('hints__option--active');
    float.classList.add('hints__option--inactive');

    first_ans_no.classList.add('algorithm__answer--answered--active');
    first_ans_yes.classList.remove('algorithm__answer--answered--active');

    var other_option = [yes_ans_yes, yes_ans_no];

    for (var i = 0; i < other_option.length; i++) {
      other_option[i].classList.remove('algorithm__answer--answered');
    }
  });

  yes_ans_yes.addEventListener('click', function() {
    event.preventDefault();

    yes_ans_yes.classList.add('algorithm__answer--answered');
    yes_ans_yes.classList.add('algorithm__answer--answered--active');
    fadeIn(yes_ans_yes);

    yes_ans_no.classList.add('algorithm__answer--answered--inactive');

    hints.classList.add('hints--show');
    inline_block.classList.add('hints__option--active');
    inline_block.classList.remove('hints__option--inactive');
    fadeIn(inline_block);
    fadeIn(reset);
    float.classList.remove('hints__option--active');
    float.classList.add('hints__option--inactive');

    first_ans_yes.classList.add('algorithm__answer--answered--active');
    first_ans_no.classList.remove('algorithm__answer--answered--active');

    var other_option = [no_ans_yes, no_ans_no];

    for (var i = 0; i < other_option.length; i++) {
      other_option[i].classList.remove('algorithm__answer--answered');
    }
  });

  yes_ans_no.addEventListener('click', function() {
    event.preventDefault();

    yes_ans_no.classList.add('algorithm__answer--answered');
    yes_ans_no.classList.add('algorithm__answer--answered--active');
    fadeIn(yes_ans_no);

    yes_ans_yes.classList.add('algorithm__answer--answered--inactive');


    hints.classList.add('hints--show');
    float.classList.add('hints__option--active');
    float.classList.remove('hints__option--inactive');
    fadeIn(float);
    fadeIn(reset);
    inline_block.classList.remove('hints__option--active');
    inline_block.classList.add('hints__option--inactive');

    first_ans_yes.classList.add('algorithm__answer--answered--active');
    first_ans_no.classList.remove('algorithm__answer--answered--active');

    var other_option = [no_ans_yes, no_ans_no];

    for (var i = 0; i < other_option.length; i++) {
      other_option[i].classList.remove('algorithm__answer--answered');
    }
  });

  reset.addEventListener('click', function() {
    event.preventDefault();

    for (var i = 0; i < all_btn.length; i++) {
      all_btn[i].classList.remove('algorithm__answer--answered');
      all_btn[i].classList.remove('algorithm__answer--answered--active');
      all_btn[i].classList.remove('algorithm__answer--answered--inactive');
    }

    second_step.classList.remove('algorithm__second-step--active');

    for (var i = 0; i < all_blocks.length; i++) {
      all_blocks[i].classList.remove('algorithm__question--inactive');
      all_blocks[i].classList.remove('algorithm__question--active');
      all_blocks[i].style.opacity = '0';
    }

    for (var i = 0; i < all_hints.length; i++) {
      all_hints[i].classList.remove('hints--show');
      all_hints[i].classList.remove('hints__option--active');
      all_hints[i].classList.remove('hints__option--inactive');
    }
  });
})();
