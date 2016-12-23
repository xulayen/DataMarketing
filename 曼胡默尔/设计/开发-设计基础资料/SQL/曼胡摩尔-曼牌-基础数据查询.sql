

--------------------------------------------曼牌开始-------------------------------
select xx.*,xx.rowid from  t_sgm_table_control  xx where xx.facid='100090' ;   --分和表
--奖池规则-开始
SELECT C.*,C.ROWID FROM T_SGM_SHAKE_CONTROL  C WHERE C.FACID='100090' and c.deleteflag='1'; --活动总控表 activityid: 3781   
SELECT R.*,R.ROWID FROM T_SGM_SHAKE_RULE_9999 R WHERE R.FACID='100090';   --有奖活动规则表    poolid: 3781 
SELECT P.*,P.ROWID FROM T_SGM_SHAKE_POOL_9999 P WHERE P.FACID='100090';   --奖池（中奖规则）
SELECT D.*,D.ROWID FROM T_SGM_COMMON_LOTTERYDLL D where d.facid='100090'  order by d.type asc;  --接口-反射-信息配置表 
SELECT E.*,E.ROWID FROM T_SGM_SHAKE_DEFAULTMASSAGE E where  e.factoryid='100090';  --默认回复基本配置表
SELECT  r.*,r.rowid  FROM T_SGM_SHAKE_REPLY R WHERE R.DELETEFLAG='1'  and  r.facid='100090' and  r.channel='M'; --数码抽奖答复表

--奖池规则-结束

SELECT X.* FROM T_SGM_BASEDATA X WHERE X.FACID = '100090' and  x.datatypename='Express';  --基础数据配置表
select dd.*,dd.rowid from  t_sgm_basedata dd  where dd.facid='100090'  and dd.datatypename='LotteryType';  --基本配置表




SELECT L.*,L.ROWID FROM T_SGM_SHAKE_LOG_9999 L WHERE L.FACID='100090'  ORDER BY L.JOINDATE DESC;     --参与日志 
SELECT A.*,A.ROWID FROM T_SGM_SHAKE_PARLOG_9999 A WHERE A.FACID='100090' ORDER BY A.CREATEDAE DESC; --真码抽奖参与日志
SELECT G.*,G.ROWID FROM T_SGM_SHAKE_LOTTERYLOG_9999 G WHERE G.FACID='100090' ORDER BY G.JOINDATE DESC;  --中奖记录日志
SELECT B.*,B.ROWID FROM T_SGM_SHAKE_REGISTERUSER_9999 B WHERE B.FACID='100090' ORDER BY B.VDATE DESC;   --注册
SELECT xx.*,xx.rowid  FROM T_SGM_CONSUMEREWARD   xx where  xx.facid='100090' ;    --防伪数码中奖-核销信息记录表



--账号表    
SELECT  i.*,i.rowid  FROM t_Ccn_Ac_User      I WHERE I.FACTORYID='100090' AND FLAG='1'  ; 
 --IP授权表  
SELECT  i.*,i.rowid  FROM T_CCN_AC_QUERYIP   I    WHERE I.AID='16' AND FLAG='1'  ;  
-- 12 短信发送表    T_MOBILE_ONLINE_SEND
SELECT X.* ,X.ROWID FROM T_MOBILE_ONLINE_SEND X WHERE X.FACID ='100005' ;
-------14，15   短线下发信息在3500数据库
--14 中奖信息短信下发提醒 
select * from  T_SMS_INTL_SEND  VV  WHERE  VV.FACTORYID='100005'   order by vv.create_date desc ; 

--16 新平台短信验证码下发  
select * from  T_SGM_VERIFYCODE   xx where xx.facid='100005';  --  
--15 短信验证码提醒
select * from  t_wap_verifycode jj   where jj.facid='9682' order by  jj.createtime desc ;   (积分平台短信验证码下发)
--短信下发用户配置
select * from  t_Sms_Intl_User     VV  WHERE   vv.factory_id='100090'   ;
select * from  t_Sms_Intl_User     VV  WHERE   vv.factory_id='1011'   ;
---  13 特殊数码录入表（ 该数码是正确数码，但是由于企业漏扫描上传数据库，查不到 产品信息）
select * from   T_SGM_STCODE xx where  xx.facid='100090';
-- 14调用抽奖借口 查询日志 
SELECT *　FROM T_CCN_COMMON_QUERYLOG Q where q.factoryid='100090'  ORDER BY Q.VTIME DESC;
SELECT *　FROM T_CCN_COMMON_QUERYLOG Q where q.factoryid='100005'  ORDER BY Q.VTIME DESC;
---------------------------------------------曼牌结束------------------------------

----查询奖池信息

SELECT r.ACTIVITYID,
       r.SMSTIMES,
       r.TOTALPOP,
       TO_CHAR(r.STARTDATE, 'YYYY-MM-DD HH24:MI:SS') STARTDATE,
       TO_CHAR(r.ENDDATE, 'YYYY-MM-DD HH24:MI:SS') ENDDATE,
       p.POOLSORT
  FROM T_SGM_SHAKE_RULE_9999  r,   T_SGM_SHAKE_POOL_9999  p
 WHERE r.ACTIVITYID ='3881'
   AND r.POOLID = p.POOLID
   AND r.DELETEFLAG = '1'
   AND p.DELETEFLAG = '1'
   AND r.STARTDATE <= TO_DATE(sysdate, 'YYYY-MM-DD HH24:MI:SS')
   AND TO_DATE(sysdate, 'YYYY-MM-DD HH24:MI:SS') < r.ENDDATE
   AND p.LOTTERYTIMES < p.TOTALTIMES
   AND r.FACID=p.FACID
   AND r.FACID ='100090'
  ORDER BY r.ACTIVITYSORT, p.POOLSORT ASC


------------



SELECT L.*,L.ROWID FROM T_SGM_SHAKE_LOG_9999 L WHERE L.FACID='100090' and  l.digit='1691173290086430'  ORDER BY L.JOINDATE DESC;     --参与日志 
SELECT A.*,A.ROWID FROM T_SGM_SHAKE_PARLOG_9999 A WHERE A.FACID='100090' and  a.digit='1691173290086430' ORDER BY A.CREATEDAE DESC; --真码抽奖参与日志
SELECT G.*,G.ROWID FROM T_SGM_SHAKE_LOTTERYLOG_9999 G WHERE G.FACID='100090' and  g.digit='1691173290086430'  ORDER BY G.JOINDATE DESC;  --中奖记录日志
SELECT B.*,B.ROWID FROM T_SGM_SHAKE_REGISTERUSER_9999 B WHERE B.FACID='100090' and b.spro='1691173290086430'  ORDER BY B.VDATE DESC;   --注册
SELECT xx.*,xx.rowid  FROM T_SGM_CONSUMEREWARD   xx where  xx.facid='100090' and  xx.digitalcode='1691173290086430' ;    --防伪数码中奖-核销信息记录表




INSERT INTO T_SGM_SHAKE_REGISTERUSER_9999(USER_NICKNAME,GUID,OPENID,IP,WX_HEADIMGURL,CATEGORY,F10,F9,CITY,SPRO,GPS,LOTTERYLEVEL,USER_SEX,PRODUCTID,WX_PROVINCE,PROVINCE,WX_COUNTRY,USER_TELEPHONE,USER_NAME,WX_CITY,FACID,PRODUCTNAME) VALUES ('杨大侠','5f28ab31280143aa9272efa951356ad9','oAU3pjvadfKD-UCc_3byGexb13tg','13817754925','XXXXXXXXXXXXXXX','M','002','e2c07bf2ba604e378a4a6f9435ea02ef','市辖区','1691173290086430','121.5047840093137|31.101175287395847|310','0','2','','上海','上海市','中国','13918157836','jack','浦东新区','100090','')




