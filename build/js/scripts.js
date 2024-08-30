$(function () {
      if ($(".bootstrap-file-upload").length > 0) {
            $(".bootstrap-file-upload").fileinput({
                  uploadUrl: "#",
                  language: "ru",
                  showUpload: false,
                  showCaption: false,
                  showCancel: false,
                  showRemove: false,
                  showProgress: true,
                  browseClass: "box-file",
                  overwriteInitial: false,
                  initialPreviewAsData: true,
                  preferIconicZoomPreview: true,
                  allowedFileExtensions: ["jpg", "png", "gif", "mp4", "mov", "avi"],
            });
      }
      // маска для номера телефона
      $(".mask-phone").mask("+7 (999) 999-99-99");
      $.fn.DataTable.ext.pager.numbers_length = 5;
      $('#tableWinners, #tableApplications, #tableCheck').DataTable({ ordering: false, bLengthChange: false, info: false, pageLength: 6, pagingType: "numbers" });

      // фикс бага, когда переходишь на вкладку заявки, у таблицы столбы не адаптируемые
      $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
            $($.fn.dataTable.tables(true)).DataTable()
                  .columns.adjust();
      });

      // блок вопросов
      $(".qa-title").click(function () {
            if ($('.qa-title').is(':visible')) {
                  $(".qa-details").slideUp(300);
                  $(".qa-item").removeClass('active');
                  $(".qa-details").css('opacity', '0');
            }
            if ($(this).next(".qa-details").is(':visible')) {
                  $(this).next(".qa-details").slideUp(300);
                  $(this).parent().removeClass('active');
                  $(this).next(".qa-desc").css('opacity', '0');
            } else {
                  $(this).next(".qa-details").slideDown(300);
                  $(this).next(".qa-details").css('opacity', '1');
                  $(this).parent().addClass('active');
            }
      });

      // мобилка меню
      $('.hamburger').click(function () {
            if ($('.hamburger').hasClass('collapsed')) {
                  $(this).removeClass('collapsed');
                  $('.page-header-menu').addClass('show');
            }
            else {
                  $(this).addClass('collapsed');
                  $('.page-header-menu').removeClass('show');
            }
      });

      // смена попапов
      $(".js-change-modal").on("click", function (e) {
            e.preventDefault();
            $(".modal").modal("hide");
            var id = $(this).attr("href");
            setTimeout(() => {
                  $(id).modal("show");
            }, 1000);
      });
      // Маска для даты
      $('[data-toggle="datepicker"]').mask("99.99.9999");
      // bootstrap datepicker
      $('[data-toggle="datepicker"], .datepicker').datepicker({
            autoHide: true,
            zIndex: 2048,
            language: "ru-RU",
            format: "dd.mm.yyyy",
      });

      // scroll button to tab 4
      $(function () {
            $('.to-data-tab').click(function (e) {
                  e.preventDefault();
                  $('a[href="#tab-5"]').tab('show');
                  $(window).scrollTop(0)
            })
      });


      $(function () {
            $('[data-toggle="tooltip"]').tooltip({ container: 'body' })
      })

      //регионы
      let regions = [
            { name: 'Volga', label: 'Приволжский федеральный округ', isPhoto: false },
            { name: 'Urals', label: 'Уральский Федеральный округ', isPhoto: false },
            { name: 'Siberian', label: 'Сибирский федеральный округ', isPhoto: true },
            { name: 'FarEastern', label: 'Дальневосточный федеральный округ', isPhoto: false },
            { name: 'Northwestern', label: 'Северо-Западный федеральный округ', isPhoto: false },
            { name: 'South', label: 'Южный Федеральный округ', isPhoto: true },
            { name: 'Kavkaz', label: 'Северо-Кавказский федеральный округ', isPhoto: false },
            { name: 'Central', label: 'Центральный Федеральный округ', isPhoto: false },
      ]

      //инициализация подсказок
      for (let i = 0; i < regions.length; i++) {
            $("#" + regions[i].name).tooltip({
                  title: regions[i].label,
                  trigger: 'manual',
                  container: 'body',
                  placement: 'auto'
            })
            cartInit($(regions[i]));
      }
      let last = ''
      function cartInit($param) {
            let regId = '#' + $param[0].name
            let photo = $param[0].isPhoto
            if (photo) {
                  $(regId).addClass('photo-in-reg')
            }
            $(regId).on('click', function () {
                  if (last != '') {
                        $(last).toggleClass("active-reg");
                        $(last).tooltip('hide')
                  }

                  $(this).toggleClass("active-reg");
                  $(this).tooltip('show')
                  last = this
            });
      }


    
      // логотипы строка
      if ($(window).width() < 764) {
            $('.marquee').marquee({
                  duration: 12000,
                  allowCss3Support: true,
                  gap: 12,
                  delayBeforeStart: 0,
                  direction: 'left',
                  duplicated: true,
                  pauseOnHover: true,
                  startVisible: true,
            });
      } else {
            $('.marquee').marquee({
                  duration: 32000,
                  allowCss3Support: true,
                  gap: 24,
                  delayBeforeStart: 0,
                  direction: 'left',
                  duplicated: true,
                  pauseOnHover: true,
                  startVisible: true,
            });
      }

      // лайки у историй
      $(".like-btn").on('click', function () { // При клике по элементу с class="el"
            $(this).toggleClass("active"); // Если у него есть class="lol", уберет его, а если нет, то добавит.
      });

      // показать больше вопросов
      $(".show-more").click(function (e) {
            $(".qa-item:hidden").slice(0, 3).fadeIn();
            if ($("qa-item:hidden").length < 1) $(this).fadeOut();
      })
})







var forms = document.querySelectorAll('.needs-validation')
Array.prototype.slice.call(forms)
      .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                  if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                  }
                  form.classList.add('was-validated')
            }, false)
      })



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
})


window.addEventListener("load", function () {
      $(".left-side-img1").addClass('left-side-img1-anim')
      $(".left-side-img2").addClass('left-side-img2-anim')
      $(".main-img-wrapper").addClass('main-banner-anim')
});

const swiper = new Swiper('.swiper-products', {
      direction: 'horizontal',
      observer: true,
      observeParents: true,
      breakpoints: {
            320: {
                  slidesPerView: 2,
                  spaceBetween: 20
            },
            580: {
                  slidesPerView: 2,
                  spaceBetween: 30
            },
            640: {
                  slidesPerView: 3,
                  spaceBetween: 20
            },
            920: {
                  slidesPerView: 4,
                  spaceBetween: 20
            },
            1200: {
                  slidesPerView: 5,
                  spaceBetween: 20
            }

      },
      pagination: {
            el: '.swiper-pagination',
            
        }

});







// названия регионов
// #Central, #Volga, #Urals, #Siberian, #FarEastern, #Northwestern, #Southern, #Central

//здесь из апи идут данные, и в которых есть фото закрашивается в светлый оранжевый
window.addEventListener("load", function () {

});


//здесь по клику окрашивание в темный ораженый и появление подсказки


