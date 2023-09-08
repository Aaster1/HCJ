$(function () {










    /* hide/show(인자1,인자2)
        인자 1 : duration
        -margin,padding,width,height,opacity 등을 지정된 값에서 0으로, 지정시간(ms) 동안 애니메이팅
            그 후, display : none 으로 변경되어 사라짐       (1000ms = 1s)
        
        인자 2 : callback function
    */

    $('#hide').on('click', function () {
        $('#box2').hide()
    })

    $('#show').on('click', function () {
        $('#box2').show()
    })

    $('#hide1000').on('click', function () {
        $('#box2').hide(1000)
    })

    $('#show1000').on('click', function () {
        $('#box2').show(1000)
    })







    /* 
        slideXXX(인자1, 인자2)
            인자1 : duration
            인자2 : callback function

        slideXXX(인자1, 인자2, 인자3)
            인자1 : duration
            인자2 : easing(swing[default],linear)
            인자3 : callback function
    */


    $('#slideUp').on('click', function () {
        $('#box3').slideUp(1000)
    })

    $('#slideDown').on('click', function () {
        $('#box3').slideDown(1000)
    })

    $('#slideToggle').on('click', function () {
        $('#box3').slideToggle(1000)
    })



    /* 
        fadeXXX(인자1)
        *인자1 : duration ( 시간 : ms) , ('slow', 'fase')

        //(인자1,인자2)
        *인자1 : duration
        *인자2 : function() - 애니메이션 수행 후, 실행할 콜백함수

        //(인자1,인자2,인자3)

        인자1 : duration
        인자2 : easing(swing,linear)
        인자3 : function()

        //(인자1,인자2,인자3,인자4)
        인자 1: duration
        인자 2: opacity
        인자 3: easing
        인자 4: function()
    */



    /* fadeOut */
    $('#fadeOut').on('click', function () {
        $('#box1').fadeOut(1000)
    })

    $('#fadeIn').on('click', function () {
        $('#box1').fadeIn(1000)
    })

    $('#fadeToggle').on('click', function () {
        $('#box1').fadeToggle(1000)
    })

    $('#fadeTo').on('click', function () {
        $('#box1').fadeTo('slow', 0.2)
    })



    
    // animate
    
    let sw = false /* 버튼 클릭 여부 */
    $('#animate').on('click', function () {
        if (!sw) {
            
            // animate('스타일',시간)
            $('#box4').animate({
                'opacity': '0.3',
                'width': '600px',
                'background-color': 'orange' /* background-color는 animate 대상이 아닙니다! */
            }, 3000)
        } else {
            $('#box4').stop().animate({     /* animate 중첩 방지 stop()의 사용위치를 보십시오. 아주 */
            'opacity' : '1',
                'width' : '150px'
            },3000)
            
        }
              sw=!sw
            })
            
            /* 
                animate() 메서드에는 적용할 수 있는 스타일 속성이 제한되어 있다.
                    * 원하는 스타일을 지정하여 애니메이션을 적용하는 방법
                        1. 이벤트 정의
                        2. 적용할 요소에 'active' 등의 이름으로 클래스 속성을 추가/삭제
                        3. css에서 .active에 애니메이션 적용할 스타일을 지정
            */
            let sw1 = false
            $('#active').on('click',function(){
                if(!sw1){
                $('#box5').addClass('active')
                $('#box5').removeClass('deActive')
            }else{
                $('#box5').addClass('deActive')
                $('#box5').removeClass('active')

            }
            
            sw1 = !sw1
            
        })

            // addClass()           :클래스 속성 추가
            // removeClass()        :클래스 속성 제거
            
            
            

})