# React 블로그 제작

## 참고자료
    https://m.blog.naver.com/sejun3278/221569414455

## DB 연동
    1. AWS RDS 생성 - https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateDBInstance.html

    2. MySQL Workbench 설치 - https://dev.mysql.com/downloads/workbench/

    3. Workbench와 AWS RDS 연동 및 (DB or 스키마) 생성
        * 오류 시 https://m.blog.naver.com/hm104284/222078086519 참고하여 보안 설정

    4. packge.json에 mysql 설치 
        yarn add mysql
        npm install mysql

    5. DB의 프로퍼티를 담은 db.js 생성

    6. server.js에서 db.js 임포트
    