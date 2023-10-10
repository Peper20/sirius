import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CreateIcon from "@mui/icons-material/Create";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
function Benefits() {
  return (
    <div className="container pt-5 mb-5">
      <div className="row d-flex justify-content-center pb-3">
        <div className="col-4 text-balance mb-4 me-5 px-3">
          <LocationOnIcon sx={{ fontSize: 100 }} />
          <h3 className="mt-4 mb-3">Выбирайте курс</h3>
          <p>
            Зарегистрируйтесь на платформе или войдите под своей учётной
            записью. Можно зарегистрироваться на один или несколько курсов.
            Рассчитывайте свои силы и приступайте!
          </p>
        </div>
        <div className="col-4 text-balance mb-4 me-5 px-3">
          <MapIcon sx={{ fontSize: 100 }} />
          <h3 className="mt-4 mb-3">Двигайтесь по карте знаний</h3>
          <p>
            Изучайте курс, последовательно двигаясь по карте знаний. Курс
            состоит из учебных модулей. Модули связаны между собой: следующие
            откроются, когда будет получен зачёт по предыдущим.
          </p>
        </div>

        <div className="col-4 text-balance mb-4 me-5 px-3">
          <YouTubeIcon sx={{ fontSize: 100 }} />
          <h3 className="mt-4 mb-3">Смотрите лекции</h3>
          <p>
            В них преподаватели объясняют теорию и разбирают примеры решения
            задач. Вы можете в любой момент вернуться к видеолекции и посмотреть
            её еще раз.
          </p>
        </div>
        <div className="col-4 text-balance mb-4 me-5 px-3">
          <CreateIcon sx={{ fontSize: 100 }} />
          <h3 className="mt-4 mb-3">Выполняйте упражнения</h3>
          <p>
            пражнения с автоматической проверкой ответа помогут убедиться, что
            вы хорошо усвоили лекции. Если упражнение не поддаётся, ещё раз
            посмотрите видео и повторите попытку.
          </p>
        </div>

        <div className="col-4 text-balance mb-4 me-5 px-3">
          <LightbulbIcon sx={{ fontSize: 100 }} />
          <h3 className="mt-4 mb-3">Решайте задачи</h3>
          <p>
            Они сложнее и сопровождаются видеоразбором. Эти задачи не влияют на
            получение зачёта, но помогут серьёзно прокачаться. Советуем их не
            пропускать.
          </p>
        </div>
        <div className="col-4 text-balance mb-4 me-5 px-3">
          <QuestionMarkIcon sx={{ fontSize: 100 }} />
          <h3 className="mt-4 mb-3">Задавайте вопросы</h3>
          <p>
            Под каждой лекцией, упражнением и задачей есть кнопка
            «Вопросы-ответы». Попросите объяснить непонятный момент из лекции
            или уточните условие задания.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
