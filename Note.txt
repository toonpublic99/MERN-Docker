1. docker-compose config 
(ตรวจสอบความถูกต้องของ config)

1.1 docker-compose config -q 
(ตรวจสอบความถูกต้องของ config โดยถ้ามี error จะมีการแจ้ง ถ้าไม่มีก็จะไม่แจ้ง)

2. docker-compose up -d 
(สร้าง images และ containers)

3. docker-compose ps 
(ตรวจสอบ service ที่รับผิดชอบ)

4. docker images 
(ตรวจสอบ image)

5. docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Status}}\t{{.Ports}}"

6. docker network ls 

** 7. docker-compose down (ลบ containers และ networks)

** 8. docker-compose down --rmi all (ลบทุกสิ่งทุกอย่าง)

9. docker-compose logs nginx (เข้าไปดู Log ในกรณีที่ Docker มีปัญหาต่างๆ)

10. docker-compose logs -f nginx (เข้าไปดู Log ในกรณีที่ Docker มีปัญหาต่างๆ แบบ Realtime)

11. docker-compose logs [service-name]

12. docker-compose up -d --build (คือการ Re-Build ใหม่เฉพาะส่วนที่มีการเปลี่ยนแปลง เพิ่มเข้ามาใหม่ หรือ ลบออกไป)
