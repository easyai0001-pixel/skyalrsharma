Last login: Sun Jul 12 22:36:27 on console
adityasharma@Adityas-MacBook-Air ~ % >....                                      
              key={c}
              className={`tab ${c === activeCat ? "active" : ""}`}
              onClick={() => setActiveCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* TEMPLATE GRID */}
        <div className="grid">
          {filtered.map((t, i) => (
            <div className="card" key={i}>
              <div className="card-thumb" style={{ background: t.bg }} />
              <h3 className="card-title">{t.title}</h3>
              <p className="card-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
zsh: parse error near `}'
adityasharma@Adityas-MacBook-Air ~ % 
