

--------------------------------------------壳牌-WT 项目 开始-------------------------------
select xx.*,xx.rowid from  t_sgm_table_control  xx where xx.facid='1011' ;   --分和表
--奖池规则 --开始
SELECT C.*,C.ROWID FROM T_SGM_SHAKE_CONTROL  C WHERE C.FACID='1011' and c.deleteflag='1'; --活动总控表 activityid: 3881   
SELECT R.*,R.ROWID FROM T_SGM_SHAKE_RULE_9999 R WHERE R.FACID='1011';   --有奖活动规则表    poolid: 3781    550040061
SELECT P.*,P.ROWID FROM T_SGM_SHAKE_POOL_9999 P WHERE P.FACID='1011';   --奖池（中奖规则）
SELECT D.*,D.ROWID FROM T_SGM_COMMON_LOTTERYDLL D where d.facid='1011'  order by d.type asc;  
SELECT E.*,E.ROWID FROM T_SGM_SHAKE_DEFAULTMASSAGE E where  e.factoryid='1011';  --默认回复基本配置表
SELECT  r.*,r.rowid  FROM T_SGM_SHAKE_REPLY R WHERE R.DELETEFLAG='1'   and  r.facid='1011' and  r.channel='X'; 

--奖池规则 --结束
--SELECT * FROM T_SGM_POINTS_SHAKE_REPLY R WHERE R.DELETEFLAG='1' and   r.facid='9999';  --积分摇奖答复表

SELECT X.*,x.rowid  FROM T_SGM_BASEDATA X WHERE X.FACID = '1011'   ;  --基础数据配置表

SELECT X.*,x.rowid  FROM T_SGM_BASEDATA X WHERE X.FACID = '100090' and   x.datatypename='SystemState'; 


SELECT x.*,x.rowid  FROM T_SGM_BASEDATA X WHERE X.FACID = '1011' and   x.Datatypename='IsRechargeBill'; 
SELECT  x.codeid  FROM  T_SGM_BASEDATA X WHERE X.FACID ='1011'  and   x.Datatypename='IsRechargeBill'

select dd.*,dd.rowid from  t_sgm_basedata dd  where dd.facid='1011'  and dd.datatypename='LotteryType';  --基本配置表

---参与抽奖日志信息--开始
SELECT L.*,L.ROWID FROM T_SGM_SHAKE_LOG_9999 L WHERE L.FACID='1011'  ORDER BY L.JOINDATE DESC;     --参与日志 
SELECT A.*,A.ROWID FROM T_SGM_SHAKE_PARLOG_9999 A WHERE A.FACID='1011' ORDER BY A.CREATEDAE DESC; --真码抽奖参与日志
SELECT G.*,G.ROWID FROM T_SGM_SHAKE_LOTTERYLOG_9999 G WHERE G.FACID='1011' ORDER BY G.JOINDATE DESC;  --中奖记录日志
SELECT B.*,B.ROWID FROM T_SGM_SHAKE_REGISTERUSER_9999  B WHERE  B.FACID='1011' order by b.vdate desc; ---用户注册信息表
SELECT xx.*,xx.rowid  FROM     T_MOBILE_ONLINE_SEND   XX  WHERE  XX.FACID='1011'  ORDER  BY XX.CREATEDATE DESC;----话费充值记录
SELECT xx.*,xx.rowid  FROM  T_MOBILE_ONLINE_SEND_bak_9999 xX;   --话费充值记录_备份表



       SELECT * FROM T_SGM_CONFIG X WHERE X.CONFIGYKEY='GpsApiUrl'



---参与抽奖日志信息--结束

select xx.*,xx.rowid  from   T_SGM_SHAKE_STORE  XX  where xx.facid='1011'; --门店信息表
SELECT  i.*,i.rowid  FROM t_Ccn_Ac_User  I   WHERE I.FACTORYID='1011' AND FLAG='1'  ;   --账号表    
SELECT  i.*,i.rowid  FROM T_CCN_AC_QUERYIP   I    WHERE I.AID='17' AND FLAG='1'  ;   --IP授权表

-- 12 短信发送表    T_MOBILE_ONLINE_SEND
SELECT X.* ,X.ROWID FROM T_MOBILE_ONLINE_SEND X  WHERE X.FACID ='100005' ;
select xx.*,xx.rowid  from  T_SGM_VERIFYCODE   xx where xx.facid='1011'  and   xx.mobile='13817754925';    ---13817754924
-------14，15   短线下发信息在3500数据库
--14 中奖信息短信下发提醒 
select * from  T_SMS_INTL_SEND  VV  WHERE  VV.FACTORYID='100005'   order by vv.create_date desc ; 

--16 新平台短信验证码下发  
select * from  T_SGM_VERIFYCODE   xx where xx.facid='1011'  and  xx.mobile='13817754925';  --  

--15 短信验证码提醒
select * from  t_wap_verifycode jj   where jj.facid='9682' order by  jj.createtime desc ;   (积分平台短信验证码下发)
--短信下发用户配置
select * from  t_Sms_Intl_User     VV  WHERE   vv.factory_id='100090'   ;
select * from  t_Sms_Intl_User     VV  WHERE   vv.factory_id='1011'   ;

---  13 特殊数码录入表（ 该数码是正确数码，但是由于企业漏扫描上传数据库，查不到 产品信息   ）
select * from   T_SGM_STCODE xx where  xx.facid='100090';

-- 14调用抽奖借口 查询日志
-----系统日志
select * from     T_CCN_COMMON_LOTTERYLOG  xx    where  xx.factoryid='1011' order  by xx.vtime desc ;
--SELECT *　FROM T_CCN_COMMON_QUERYLOG Q where q.factoryid='1011'  ORDER BY Q.VTIME DESC;
--SELECT *　FROM T_CCN_COMMON_QUERYLOG Q where q.factoryid='100005'  ORDER BY Q.VTIME DESC;
----------------------------------------------------------------------------------
---------微信授权记录表
--select xx.*,xx.rowid from  T_SGM_SHAKE_AUTHWECHAT_LOG  xx ;

---------------------------------------------壳牌-WT  开始------------------------------




---------------
--判断奖池是否已满
SELECT r.ACTIVITYID
  FROM T_SGM_SHAKE_RULE_9999  r, T_SGM_SHAKE_POOL_9999  p
 WHERE r.ACTIVITYID = '3881'
   AND r.POOLID = p.POOLID
   AND r.DELETEFLAG = '1'
   AND p.DELETEFLAG = '1'
   AND r.STARTDATE <= TO_DATE('2016/10/28', 'YYYY-MM-DD HH24:MI:SS')
   AND TO_DATE('2016/10/28', 'YYYY-MM-DD HH24:MI:SS') <= r.ENDDATE
   AND p.LOTTERYTIMES < p.TOTALTIMES
   AND r.FACID = p.FACID
   AND r.FACID = '1011'
 ORDER BY r.ACTIVITYSORT, p.POOLSORT ASC



