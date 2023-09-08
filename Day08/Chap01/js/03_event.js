$(function () {


    // 이벤트 처리 메소드
    // - on('이벤트 타입', 이벤트핸들러(콜백함수) { } )
    //  * 이벤트 타입 : click, keyup, change . . .
    //  * 이벤트 핸들러 : 이벤트 발생 시, 실행될 콜백 함수

    /* 
            - function()    :   this가 가리키는건 함수
            - () =>{}       :   this가 가리키는건 함수 외부의 요소
                        this가 필요한 함수 쓸 때는 『애로우 펑션』사용 비추!
    */


    $('#item1').on('click', function () {
        $('#item1').css('color', 'hotpink')
    })

    // this : 현재 속한 블록의 객체
    //          현재 속한 요소를 가리키는 키워드
    $('#item2').on('click', function () {
        $(this).css('color', 'hotpink')
    })

    $('#item3').on('mouseover', function () {
        $(this).css('color', 'hotpink')
        $(this).css('background-color', 'cornflowerblue')
    })

    $('#item3').on('mouseout', function () {
        $(this).css('color', 'hotpink')
        $(this).css('background-color', 'royalblue')
    })

    // 메서드 체인
    //  :   하나의 jQuery 객체에 여러 메서드를 연결하는 기법
    $('#item4')
        // .on('mouseover', function() {
        //     $(this).css('color', 'red')
        //     $(this).css('background-color', 'cornflowerblue')
        // })

        // .on('mouseout', function() {
        //     $(this).css('color', 'white')
        //     $(this).css('background-color', 'royalblue')
        // })
        .on('click', function () {
            $(this). css('color', 'springgreen')
        })
        .on('dblclick', function () {
            $(this). css({
                'border': '5px solid hotpink',
                'background-color': 'black'
            })
        })
})