jQuery('h1').click(function(){
    alert("This is a heading tag")
  });

  jQuery('p').click(function(){
    alert("This is a paragraph")
  });

  jQuery('img').click(function(){
    alert("This is an image")
  });

  jQuery("h1").click(function() {
  alert("This is a header.");
  alert("I told you, THIS IS A HEADER!");
});
jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is a header.");
  });

  jQuery("p").click(function() {
    alert("This is a paragraph.");
  });

  jQuery("img").click(function() {
    alert("This is an image.");
  });
});

$(document).ready(function() {
  $("p").click(function() {
    $("img").show();
  });
});

$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});

$(document).ready(function() {
     $(".clickable").click(function() {
       $(".walrus-showing").toggle();
       $(".walrus-hidden").toggle();
     });
   });

   $(document).ready(function() {
       $("button#green").click(function() {
         $("body").addClass("green-background");
       });

       $("button#yellow").click(function() {
         $("body").addClass("yellow-background");
       });

       $("button#red").click(function() {
         $("body").addClass("red-background");
       });
     });

     $(document).ready(function() {
             $("button#green").click(function() {
               $("body").removeClass();
               $("body").addClass("green-background");
             });

             $("button#yellow").click(function() {
               $("body").removeClass();
               $("body").addClass("yellow-background");
             });

             $("button#red").click(function() {
               $("body").removeClass();
               $("body").addClass("red-background");
             });
           });

           $(document).ready(function() {
      $("button#hello").click(function() {
        $("ul").prepend("<li>Hello!</li>");
      });

      $("button#goodbye").click(function() {
        $("ul").prepend("<li>Goodbye!</li>");
      });

      $("button#stop").click(function() {
        $("ul").prepend("<li>Stop copying me!</li>");
      });
    });

    $(document).ready(function() {
           $("button#hello").click(function() {
             $("ul#user").prepend("<li>Hello!</li>");
             $("ul#webpage").prepend("<li>Why hello there!</li>");
           });

           $("button#goodbye").click(function() {
             $("ul#user").prepend("<li>Goodbye!</li>");
             $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
           });


           $("button#stop").click(function() {
             $("ul#user").prepend("<li>Stop copying me!</li>");
             $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
           });
         });

         $(document).ready(function() {
       // previous code...
       $('li').css('background-color', 'green');
     });

     $("button#hello").click(function() {
      $("ul#user").prepend("<li>Hello!</li>");
      $("ul#webpage").prepend("<li>Why hello there!</li>");
      $('li').css('background-color', 'green');
    });

    $("button#hello").click(function() {
       $("ul#user").prepend("<Hello!>");
       $("ul#webpage").prepend("<Why hello there!>");
       $('li').click(function() {
         alert('hi');
       });
     });

     $(document).ready(function() {

            $("div#click-one").click(function(event) {
              var whatToSay = "Hello!";
              alert(whatToSay);
            });

            $("div#click-two").click(function(event) {
              alert(whatToSay);
            });
          });

          $(document).ready(function() {

        $("div#click-one").click(function(event) {
          whatToSay = "Hello!";
          alert(whatToSay);
        });

        $("div#click-two").click(function(event) {
          alert(whatToSay);
        });
      });

      $(document).ready(function() {
    $("#blanks form").submit(function() {
        $(".person1").append("blah blah");
        $(".person2").append("blah blah");
        $(".animal").append("blah blah");
        $(".exclamation").append("blah blah");
        $(".verb").append("blah blah");
        $(".noun").append("blah blah");

        $("#story").show();
    });
});

$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        $(".person1").append("blah blah");
        $(".person2").append("blah blah");
        $(".animal").append("blah blah");
        $(".exclamation").append("blah blah");
        $(".verb").append("blah blah");
        $(".noun").append("blah blah");

        $("#story").show();

        event.preventDefault();
    });
});

$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").text(person1Input);
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput);

        $("#story").show();

        event.preventDefault();
    });
});

$(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

      blanks.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        $("." + blank).text(userInput);
      });

      $("#story").show();

      event.preventDefault();
    });
  });

$(document).ready(function() {
       $("#blanks form").submit(function() {
         var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

         blanks.forEach(function(blank) {
           var userInput = $("input." + blank).val();
           $("." + blank).text(userInput).val();
         });

         $("#story").sho();
       });
     });

     $(document).ready(function() {
            $("#blanks form").submit(function() {
              alert('Got to beginning of form submit!');
              var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

              blanks.forEach(function(blank) {
                var userInput = $("input." + blank).val();
                $("." + blank).text(userInput).val();
              });

              $("#story").show();
              alert('Got to end of form submit!');
            });
          });

    $(document).ready(function() {
                $("#blanks form").submit(function(event) {
                  var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

                  blanks.forEach(function(blank) {
                    var userInput = $("input." + blank).val();
                    $("." + blank).text(userInput).val();
                  });

                  $("#story").show();

                  event.preventDefault();
                });
              });

    $(document).ready(function() {
                  $("#blanks form").submit(function(event) {
                    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

                    blanks.forEach(function(blank) {
                      debugger;
                      var userInput = $("input." + blank).val();
                      $("." + blank).text(userInput).val();
                    });

                    $("#story").show();

                    event.preventDefault();
                  });
                });
                
          $(document).ready(function() {
                       $("#blanks form").submit(function(event) {
                         var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

                         blanks.forEach(function(blank) {
                           var userInput = $("input." + blank).val();
                           $("." + blank).text(userInput).val();
                         });

                         $("#story").show();

                         event.preventDefault();
                       });
                     });
