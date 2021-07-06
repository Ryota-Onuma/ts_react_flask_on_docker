FROM ubuntu:latest

ENV FLASK_ENV=production

RUN apt-get update  && apt-get install tzdata && apt-get install python3 python3-pip tzdata nodejs npm -y

RUN pip3 install flask flask_sqlalchemy flask_migrate 

WORKDIR /app

COPY ./app /app

WORKDIR /app/frontend

RUN npm install && npm run build &&  mv ./dist/bundle.js ../backend/static/

WORKDIR /app

EXPOSE 5000

CMD ["python3", "backend/server.py"]